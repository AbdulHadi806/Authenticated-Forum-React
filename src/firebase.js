import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBnbReDMpd-F7jJfGqvUi9TWj_LNfUmFAY",
  authDomain: "auth-form-development.firebaseapp.com",
  projectId: "auth-form-development",
  storageBucket: "auth-form-development.appspot.com",
  messagingSenderId: "456626369274",
  appId: "1:456626369274:web:133ac450795d0054e78f43"
})

export const auth = app.auth()
export default app