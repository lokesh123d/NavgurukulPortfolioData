# 🔥 Firebase Realtime Database Setup
The "Billing Required" error happens because Firestore sometimes requires a credit card for certain regions.
**Solution:** We switched to **Realtime Database** which is free and easier.

### Step 1: Create Realtime Database
1. Go to your [Firebase Console](https://console.firebase.google.com/).
2. Click on **"Build"** > **"Realtime Database"** (NOT Firestore).
3. Click **"Create Database"**.
4. Choose a location (e.g., Singapore or US).
5. **IMPORTANT**: Select **"Start in Test Mode"**.
6. Click **"Enable"**.

### Step 2: Get the Database URL
1. Once created, you will see a URL at the top of the Data tab (e.g., `https://navgurukul-xxxx.firebaseio.com/`).
2. Copy this URL.
3. Open `src/firebase.js` in your code.
4. Update the `databaseURL` field with your copied URL.

### Step 3: Restart & Login
1. Restart the app (`npm run dev`).
2. Go to `/admin`.
3. Login with your admin email/password.
4. Add students!
