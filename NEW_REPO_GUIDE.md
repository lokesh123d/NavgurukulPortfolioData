# 🔄 How to Switch to a New GitHub Repository & Deploy

If you want to upload this code to a **brand new** GitHub repository and deploy it, follow these steps:

### Step 1: Create New Repository
1.  Go to [GitHub.com](https://github.com/new).
2.  Create a new repository (e.g., `Navgurukul-Final`).
3.  **Copy the URL** of the new repository (e.g., `https://github.com/yourname/new-repo.git`).

### Step 2: Update Git Remotes (In Terminal)
Run these commands in your VS Code terminal to switch from the old repo to the new one:

```bash
# 1. Remove the link to the old repository
git remote remove origin

# 2. Add the link to your NEW repository
git remote add origin <PASTE_YOUR_NEW_REPO_URL_HERE>

# 3. Push your code to the new repository
git push -u origin main
```

### Step 3: Deploy on Vercel (New Project)
1.  Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click **"Add New..."** > **"Project"**.
3.  You should see your **NEW** repository in the list. Click **Import**.
4.  **IMPORTANT**: Before clicking Deploy, open the **"Environment Variables"** section.
5.  Add all the variables from your `.env` file again (Vercel treats this as a completely new project, so it doesn't know your keys).
6.  Click **Deploy**.

### Summary
*   **Old Repo**: Disconnected.
*   **New Repo**: Connected and has all your code.
*   **Vercel**: You created a fresh deployment linked to the new repo.
