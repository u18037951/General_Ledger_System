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
        newObj[email] = user_info;
        let cmyObj = Object.assign({}, myObj, newObj);
        const created_object = {
             employee_data: cmyObj
         }
        await saveData.saveData('Employees', user_info.PersonType, created_object)
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

module.exports={add_employees,get_employees,fetch_employees};