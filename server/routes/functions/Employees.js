require("dotenv").config();
const saveData= require("../../database/myDatabase")
const {Collection} = require("mongoose");
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
const get_employees=async ()=>{
    return await saveData.getAllEmployees('Employees').then(data=>{
        return data;
    })
}
const fetch_employees=async (Type)=>{
    return await saveData.fetchEmployee(Type).then(data=>{
        return data.data();
    })
}
const generateEmployeeID = async (object)=> {
    const text ='__';
    const PersonType = object.PersonType;
    const Name = object.FullName;
    const unique = Math.floor(1000 + Math.random() * 9000);
    let employeeID = text.concat(PersonType.substring(1, 4),Name.substring(1, 4),unique.toString());
    return employeeID;

}

module.exports={add_employees,get_employees,fetch_employees};