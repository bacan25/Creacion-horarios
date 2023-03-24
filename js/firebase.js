
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCU41EJwoQqg50TFm2vWrI91Qgi9R_hS90",
authDomain: "generacion-horarios.firebaseapp.com",
projectId: "generacion-horarios",
storageBucket: "generacion-horarios.appspot.com",
messagingSenderId: "31144817121",
appId: "1:31144817121:web:e92fd3f44a11e8842e62a0",
measurementId: "G-D72PF7V90F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db};