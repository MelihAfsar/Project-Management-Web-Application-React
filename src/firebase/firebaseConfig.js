import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { successAlert, errorAlert } from "../helpers/AlertHelper";
import { translateMessage } from "./firebaseErrorTranslate";
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();
export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        successAlert("Profilinize giriş başarılı.");
        return user;

    } catch (error) {
        console.log(error.code);
        errorAlert(translateMessage(error.code));
        return false;
    }
}

export const logout = async () => {
    await signOut(auth).then(() => {
        successAlert("Profilinizden çıkış başarılı.")
    }).catch((error) => {
        console.log(error.code);
        errorAlert(translateMessage(error.code));
    });
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("logged in.");
    } else {
        console.log("logged out");
    }
});

export const getUserInfo = () => {
    const user = auth.currentUser;
    if (user !== null) {
      user.providerData.forEach((profile) => {
        return profile.email;})
    }
    else {
        return null;
    }
}

export default app