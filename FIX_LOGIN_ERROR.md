# 🚨 CRITICAL: Fix "API_KEY_HTTP_REFERRER_BLOCKED"

You are seeing this error because your **Google Cloud API Key** is blocking the request.

### ⚡️ YOU MUST DO THIS NOW:

1.  Go to **[Google Cloud Console - Credentials](https://console.cloud.google.com/apis/credentials)**.
2.  Select your project: **NavgurukulPortfolio**.
3.  Find the **API Key** (it has a green checkmark or yellow warning).
    *   **Note:** Your API Key has changed to `AIzaSyDMzphBXMHi_JUqRKqpJ7kqJaik6Vu1pUo`. Make sure you are editing this one.
4.  Click the **Pencil Icon** (Edit).
5.  Scroll down to **"Application restrictions"**.
6.  **ADD THIS URL** to the list:
    *   `https://navgurukul-f710d.firebaseapp.com/*`

**Why?**
When you log in, Firebase sends a request to `identitytoolkit.googleapis.com`. This request comes from `firebaseapp.com`, NOT just `localhost`. If you don't allow this URL, Google blocks the login.

### 🔐 Also Check Password
The error `auth/invalid-credential` means the password might be wrong.
Ensure the user `lokesh@123.com` in Firebase Authentication has the password `123456`.
If you are not sure, **delete the user and create it again** with that password.
