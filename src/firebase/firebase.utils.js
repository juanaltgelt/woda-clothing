import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();


export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result)=> {
      console.log(result)
  })
  .catch((err)=> {
      console.log(err)
  })
    }

