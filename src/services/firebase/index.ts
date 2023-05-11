import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'
import 'firebase/auth'

const config = {
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: process.env.VUE_APP_FB_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FB_DB_URL,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FB_MESSAGE_SENDER_ID,
  appId: process.env.VUE_APP_FB_APP_ID,
  measurementId: process.env.VUE_APP_FB_MEASUREMENT_ID
}

// Initialize Firebase
firebase.initializeApp(config)
const db = firebase.firestore()

export  {firebase, db }
