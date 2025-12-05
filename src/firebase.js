import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// 🔴 REPLACE THE VALUES BELOW WITH YOUR FIREBASE CONFIGURATION
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project
// 3. Click the web icon (</>) to add an app
// 4. Copy the "firebaseConfig" object and paste the values here

// Helper to safely read and trim env vars
const readEnv = (key) => (import.meta.env[key] ?? "").toString().trim();

// Validate required env vars early for clearer errors in dev/prod
const requiredKeys = [
    "VITE_FIREBASE_API_KEY",
    "VITE_FIREBASE_AUTH_DOMAIN",
    "VITE_FIREBASE_PROJECT_ID",
    "VITE_FIREBASE_STORAGE_BUCKET",
    "VITE_FIREBASE_MESSAGING_SENDER_ID",
    "VITE_FIREBASE_APP_ID",
    "VITE_FIREBASE_DATABASE_URL"
];

const missing = requiredKeys.filter((k) => !readEnv(k));
if (missing.length) {
    // Throwing gives a clear stack and stops initialization with a helpful message
    throw new Error(
        `Missing Firebase environment variables: ${missing.join(", ")}.\n` +
        `Ensure a .env file exists at the project root and restart dev server.`
    );
}

const firebaseConfig = {
    apiKey: readEnv("VITE_FIREBASE_API_KEY"),
    authDomain: readEnv("VITE_FIREBASE_AUTH_DOMAIN"),
    projectId: readEnv("VITE_FIREBASE_PROJECT_ID"),
    storageBucket: readEnv("VITE_FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: readEnv("VITE_FIREBASE_MESSAGING_SENDER_ID"),
    appId: readEnv("VITE_FIREBASE_APP_ID"),
    measurementId: readEnv("VITE_FIREBASE_MEASUREMENT_ID"),
    databaseURL: readEnv("VITE_FIREBASE_DATABASE_URL"),
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
