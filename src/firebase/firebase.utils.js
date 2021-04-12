import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAkloEoVhEGrIn7nDm9uB_DLLje4LfZbq4",
    authDomain: "ecommerce-project-578d4.firebaseapp.com",
    projectId: "ecommerce-project-578d4",
    storageBucket: "ecommerce-project-578d4.appspot.com",
    messagingSenderId: "602014287949",
    appId: "1:602014287949:web:0fc5f4277da6f6481d7404",
    measurementId: "G-Z5JKNVM6ZZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;