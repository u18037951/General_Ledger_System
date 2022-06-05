const express = require("express");
const router = express.Router();
const userFunctions =require('../functions/Employees')
router.post("/addEmployee", async (request, response, next)=>{
    console.log(request.body.email);
    if(!request.body.email){
        let error = new Error(`Malformed request. Please check your parameters`);
        error.status = 400;
        return next(error);
    }
    else{
        await userFunctions.add_employees(request.body.email,request.body.info).then(data=>{
            return response.status(200).json(data);
        }).catch(err => {
            let error = new Error(err);
            error.status = 500;
            return next(error);
        });
    }
});
module.exports = router