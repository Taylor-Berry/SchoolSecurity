// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoQLjcpKR7d10oFV6dHbTPJt0KgdS-l6k",
  authDomain: "school-security-ec303.firebaseapp.com",
  projectId: "school-security-ec303",
  storageBucket: "school-security-ec303.appspot.com",
  messagingSenderId: "1095683671006",
  appId: "1:1095683671006:web:871a5a5476a0775303934f"
};

// Initialize Firebase

let app;

if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app();
}

const auth = firebase.auth();

export {auth};
