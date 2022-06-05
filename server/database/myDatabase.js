require("dotenv").config();
const admin = require('firebase-admin');
const serviceAccount = require('./config_db');
/** Initializes the database*/
admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

const saveData=(collectionPath,documentName,object_info)=>
{
       const object = {
           employee_info: object_info

        };
        console.log(collectionPath);
        try{
                db.collection(collectionPath).doc(documentName).set(object, {merge:true});
        }
        catch(e) {
                console.error(`An error occurred while connecting to the database: \n${e}`);
        }
}
module.exports={saveData};