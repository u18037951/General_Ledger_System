import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { getFirestore, collection, addDoc, where, query, getDocs} from "firebase/firestore"
import 'firebase/compat/firestore';

const app = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};
firebase.initializeApp(app);
const db = getFirestore();
export {db}
export const auth = firebase.auth();
export default app