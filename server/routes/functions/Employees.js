require("dotenv").config();
const nodemailer = require("nodemailer");
const saveData= require("../../database/myDatabase")
const {Collection} = require("mongoose");
const {saveDataNoMerge} = require("../../database/myDatabase");
/** This function adds employee details to the database
 * @param {string} email Auto generated ID.
 * @param {object} user_info object containing employee details.
 * @return store data in the DB.
 * */
const add_employees=async (email, user_info )=>{
        let myObj = {};
        let newObj = {};
        let ID = await generateEmployeeID(user_info);
        Object.assign(user_info, {Employee_ID: ID});
        newObj[email] = user_info;

        let cmyObj = Object.assign({}, myObj, newObj);
        const created_object = {
             employee_data: cmyObj
         }
        await saveData.saveData('Employees', user_info.PersonType, created_object)
        return {email: email , Employee_ID : ID};
}
const delete_employees=async (email, Type )=>{
    return await saveData.fetchEmployee(Type).then(data=>{

        const obj = data.data();
        delete obj.employee_data[email];
        saveDataNoMerge('Employees', Type,obj);
        return {email: email , response: 'Employee successfully deleted!'};
    })
}

const get_employees=async ()=>{
    return await saveData.getAllEmployees('Employees').then(data=>{
        return data;
    })
}
const get_assets=async ()=>{
    return await saveData.getAssets().then(data=>{
        return data;
    })
}
const delete_assets=async (name)=>{
    return await saveData.deleteAssets(name).then(data=>{
        return {Asset: name , response: 'Assets successfully deleted!'};
    })
}
const fetch_employees=async (Type)=>{
    return await saveData.fetchEmployee(Type).then(data=>{
        return data.data();
    })
}
const assign_employees=async (EmployeeID,obj)=>{
        await saveData.saveData('Assignments', EmployeeID, obj);
        return {EmployeeID: EmployeeID , response: 'Employee successfully Assigned A position!'};

}
const generateEmployeeID = async (object)=> {
    const text ='__';
    const PersonType = object.PersonType;
    const Name = object.FullName;
    const unique = Math.floor(1000 + Math.random() * 9000);
    let employeeID = text.concat(PersonType.substring(1, 4),Name.substring(1, 4),unique.toString());
    return employeeID;

}
const addAssets = async (name, assets_object)=> {
    await saveData.saveData('Assets', name,  assets_object)
    return {name: name , Response : 'Assets successfully added'};
}
const removeAssets = async (email)=> {

    await saveData.saveData('Assets', email,  {})
    return {email: email , Response : 'Assets successfully removed'+ 'for user: '+ email};
}
const addPayment = async (email, paymentDetails)=> {

    await saveData.saveData('Payment', email,  paymentDetails)
    return {email: email , Response : 'Invoice successfully added'+ ' by: '+ email};
}
const getPayment = async (email)=> {

    return await saveData.getPayments(email).then(data=>{
        return data.data();
    })
}
async function sendEmail(email) {

    const sender = await nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });
    const receiver = {
        from: 'mojohnnylerato@gmail.com',
        to: 'u18037951@tuks.co.za',
        subject: 'Invoice Notification',
        text: "Invoice successfully generated!",
        html: "<body style=\" background-color: black;text-align: center;color: white;font-family: Arial, Helvetica, sans-serif; \">\n" +
            "\n" +
            "<h1>Subscription</h1>\n" +
            "<p>You have subscribed to receive email alerts!</p>\n" +
            "<p></p>\n" +
            "<img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiMQS1-LtJdXdKYhcC1WJ9pQjE9SOksrUc7IynK7z1ybmLsRx6Rmj4OIvRxtyYXj5PSGU&usqp=CAU\" alt=\"Avatar\" style=\"width:200px\">\n" +
            "\n" +
            "</body>",
    };

    await sender.sendMail(receiver, (err, data) => {

        if (err) {
            console.log(err);
            return 'Something went wrong while trying to send the email';

        } else {

            return {email: email , Response : 'Invoice successfully added'+ 'for user: '+ email};
        }
    })
}


const generateInvoice = async (email)=> {

    return await saveData.getPayments(email).then(item=>{
        sendEmail('u18037951@tuks.co.za').then(d=>{
            return d;
        }).catch(console.error);
    })

}
module.exports={add_employees,get_employees,fetch_employees, addAssets,removeAssets,addPayment,getPayment,generateInvoice,delete_employees,assign_employees,get_assets,delete_assets};