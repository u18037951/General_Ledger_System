require("dotenv").config();
const admin = require('firebase-admin');
const serviceAccount = require('./config_db');
const {Collection} = require("mongoose");
/** Initializes the database*/
admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const saveData=async (collectionPath,documentName,object)=>
{
        try{
            await db.collection(collectionPath).doc(documentName).set(object, {merge: true});
        }
        catch(e) {
            console.error(`An error occurred while connecting to the database: \n${e}`);
        }
}
const saveDataNoMerge=async (collectionPath,documentName,object)=>
{
    try{
        await db.collection(collectionPath).doc(documentName).set(object);
    }
    catch(e) {
        console.error(`An error occurred while connecting to the database: \n${e}`);
    }
}
const sortEmployeeByType=async (Type)=>{
    let storage = [];
    return  new Promise( function (resolve, reject) {
        let i=1;
        db.collection('Employees').get().then((snapshot) => {
            snapshot.docs.forEach(async doc => {
                console.log(doc.data().employee_info.PersonType);
                if (typeof doc.data().employee_info.PersonType !== "undefined" && doc.data().employee_info.PersonType ===Type) {
                    storage.push(doc.data());
                }
                if(i === snapshot._size )
                {
                    resolve(storage);
                }
                i++;
            });

        });
    })
}
const getAllEmployees=async ()=>{
    return  new Promise( function (resolve, reject) {
        let i=1;
        let array_of_documents = [];
        db.collection('Employees').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                if(typeof doc.data() !== "undefined")
                {
                    array_of_documents.push(doc.data());
                }
                if(i === snapshot._size )
                {
                    resolve(array_of_documents);
                }
                i++;

            });
            resolve({});
        });
    });
}
const fetchEmployee=async (DocumentPath)=>{
    try{
        return db.collection('Employees').doc(DocumentPath).get().then();
    }
    catch(e) {
        console.error(`An error occurred while connecting to the database: \n${e}`);
    }


}
const getPayments=async (email)=>{
    try{
        return db.collection('Payment').doc(email).get().then();
    }
    catch(e) {
        console.error(`An error occurred while connecting to the database: \n${e}`);
    }


}
module.exports={saveData,getAllEmployees,sortEmployeeByType,fetchEmployee,getPayments,saveDataNoMerge};