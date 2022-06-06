require("dotenv").config();
const admin = require('firebase-admin');
const serviceAccount = require('./config_db');
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
const getAllEmployees=async (collectionPath)=>{
    return  new Promise( function (resolve, reject) {
        db.collection(collectionPath).get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                let items = doc.data();
                console.log('item first');
                if (typeof items !== "undefined") {

                    resolve(items);
                }

                resolve({});
            });

        });
    });
}


module.exports={saveData,getAllEmployees,sortEmployeeByType};