# 🚀 How to Deploy to Vercel (The Right Way)

Since we are using `.env` to hide your API keys, Vercel doesn't know about them yet. You need to tell Vercel what they are.

### Step 1: Push to GitHub
Make sure you have pushed your latest code to GitHub.
```bash
git add .
git commit -m "Ready for deploy"
git push
```

### Step 2: Go to Vercel
1.  Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click on your project **NavgurukulPortfolio**.
3.  Go to **Settings** (top menu).
4.  Click **Environment Variables** (left menu).

### Step 3: Add Variables
You need to add these 8 variables manually. Copy the **Values** from your local `.env` file.

| Key | Value (Example) |
| :--- | :--- |
| `VITE_FIREBASE_API_KEY` | `AIzaSyDM...` |
| `VITE_FIREBASE_AUTH_DOMAIN` | `navgurukul-f710d.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | `navgurukul-f710d` |
| `VITE_FIREBASE_STORAGE_BUCKET` | `navgurukul-f710d.firebasestorage.app` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | `835927058920` |
| `VITE_FIREBASE_APP_ID` | `1:835927058920:web:09d0ea35db1cb545819c5d` |
| `VITE_FIREBASE_MEASUREMENT_ID` | `G-28HVSR69BT` |
| `VITE_FIREBASE_DATABASE_URL` | `https://navgurukul-f710d-default-rtdb.firebaseio.com` |

### Step 4: Redeploy
1.  Go to the **Deployments** tab.
2.  Click the **three dots (⋮)** next to your latest deployment.
3.  Click **Redeploy**.

Now Vercel will have access to the keys, and your site will work!
