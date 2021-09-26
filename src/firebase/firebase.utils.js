import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyBCHVzH0KjmFKRPES2rTWYTlInWXX77FoE",
    authDomain: "crwn-db-d62b7.firebaseapp.com",
    projectId: "crwn-db-d62b7",
    storageBucket: "crwn-db-d62b7.appspot.com",
    messagingSenderId: "744456047344",
    appId: "1:744456047344:web:d59681eda702b3d24e5035",
    measurementId: "G-W4ZWFLRG0H"
};


firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;