const express = require("express");
const router = express.Router();
const userFunctions =require('../functions/Employees')
router.post("/addEmployee", async (request, response, next)=>{

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
router.post("/getEmployee", async (request, response, next)=>{

        await userFunctions.get_employees(request.body.PersonType).then(data=>{
            return response.status(200).json(data);
        }).catch(err => {
            let error = new Error(err);
            error.status = 500;
            return next(error);
        });

});
router.post("/removeEmployee", async (request, response, next)=>{
    await userFunctions.delete_employees(request.body.email,request.body.PersonType).then(data=>{
        return response.status(200).json(data);
    }).catch(err => {
        let error = new Error(err);
        error.status = 500;
        return next(error);
    });


})
router.post("/assignEmployee", async (request, response, next)=>{

    await userFunctions.assign_employees(request.body.Employee_ID,request.body.Info).then(data=>{
        return response.status(200).json(data);
    }).catch(err => {
        let error = new Error(err);
        error.status = 500;
        return next(error);
    });
})
router.post("/addAssets", async (request, response, next)=>{
    await userFunctions.addAssets(request.body.Name,request.body.Asset).then(data=>{
        return response.status(200).json(data);
    }).catch(err => {
        let error = new Error(err);
        error.status = 500;
        return next(error);
    });

});
router.post("/getAssets", async (request, response, next)=>{
    await userFunctions.get_assets().then(data=>{
        return response.status(200).json(data);
    }).catch(err => {
        let error = new Error(err);
        error.status = 500;
        return next(error);
    });


});
router.post("/deleteAssets", async (request, response, next)=>{
    await userFunctions.delete_assets(request.body.Name).then(data=>{
        return response.status(200).json(data);
    }).catch(err => {
        let error = new Error(err);
        error.status = 500;
        return next(error);
    });


});
router.post("/addPayments", async (request, response, next)=>{
    await userFunctions.addPayment(request.body.email, request.body.item).then(data=>{
        return response.status(200).json(data);
    }).catch(err => {
        let error = new Error(err);
        error.status = 500;
        return next(error);
    });

});
router.post("/getPayments", async (request, response, next)=>{
    await userFunctions.getPayment(request.body.email).then(info=>{
        return response.status(200).json(info);
    }).catch(err => {
        let error = new Error(err);
        error.status = 500;
        return next(error);
    });

});
router.post("/generateInvoice", async (request, response, next)=>{
    await userFunctions.generateInvoice(request.body.email).then(info=>{
        return response.status(200).json(info);
    }).catch(err => {
        let error = new Error(err);
        error.status = 500;
        return next(error);
    });

});
router.post("/ApproveInvoice", async (request, response, next)=>{


});
router.post("/fetchEmployee", async (request, response, next)=>{

    if(!request.body.PersonType){
        let error = new Error(`unable to handle request check if person type entered`);
        error.status = 500;
        return next(error);
    }
    else{
        await userFunctions.fetch_employees(request.body.PersonType).then(data=>{
            return response.status(200).json(data);
        }).catch(err => {
            let error = new Error(err);
            error.status = 500;
            return next(error);
        });
    }
});
module.exports = router