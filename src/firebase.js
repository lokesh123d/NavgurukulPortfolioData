import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// 🔴 REPLACE THE VALUES BELOW WITH YOUR FIREBASE CONFIGURATION
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project
// 3. Click the web icon (</>) to add an app
// 4. Copy the "firebaseConfig" object and paste the values here

const firebaseConfig = {
    apiKey: "AIzaSyCOsShiXlwMaDKBYBQpkjqxqD0MAx0SWsc",
    authDomain: "navgurukul-f710d.firebaseapp.com",
    projectId: "navgurukul-f710d",
    storageBucket: "navgurukul-f710d.firebasestorage.app",
    messagingSenderId: "835927058920",
    appId: "1:835927058920:web:50e3c2c76266d6b3819c5d",
    measurementId: "G-VLCW8MG4J8",
    databaseURL: "https://navgurukul-f710d-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
