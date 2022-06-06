const saveData= require("../../database/myDatabase")
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
// add_employees('','').then(data=>{
//      console.log(data)
//     }
// )
module.exports={add_employees};