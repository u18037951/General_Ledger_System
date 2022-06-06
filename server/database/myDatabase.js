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
const sortEmployeeByType=async (Type)=>{
    let arrayofdocuments = [];
    return  new Promise( function (resolve, reject) {
        let i=1;
        db.collection('Employees').get().then((snapshot) => {
            snapshot.docs.forEach(async doc => {
                console.log(doc.data().employee_info.PersonType);
                if (typeof doc.data().employee_info.PersonType !== "undefined" && doc.data().employee_info.PersonType ===Type) {
                    arrayofdocuments.push(doc.data());
                }
                if(i === snapshot._size )
                {
                    resolve(arrayofdocuments);
                }
                i++;
            });

        });
    })
}
const getAllEmployees=async (PersonType)=>{
    return  new Promise( function (resolve, reject) {
        let i=1;
        let arrayofdocuments = [];
        db.collection('Employees').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                if(typeof doc.data() !== "undefined")
                {
                    arrayofdocuments.push(doc.data());
                }
                if(i === snapshot._size )
                {
                    resolve(arrayofdocuments);
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

module.exports={saveData,getAllEmployees,sortEmployeeByType,fetchEmployee};