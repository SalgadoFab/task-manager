import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth'; 
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig)


const db = firebase.firestore()
const auth = firebase.auth()
const getCurrentUser = getAuth(); 

const usersCollection = db.collection('users')
const tasksCollection = db.collection('tasks')

export { db, auth, getCurrentUser, usersCollection, tasksCollection}

export default firebase