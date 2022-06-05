const saveData= require("../../database/myDatabase")
/** This function adds employee details to the database
 * @param {string} email Auto generated ID.
 * @param {object} user_info object containing employee details.
 * @return store data in the DB.
 * */
const add_employees=async (email, user_info )=>{
     saveData.saveData("Employees",email,user_info );


}
module.exports={add_employees};