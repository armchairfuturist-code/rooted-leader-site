<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1NXbzNvVleM3fCzz9DTJNBXXcYg-IzjSd

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

This is a great request. Documenting your workflow is the best way to ensure you don't feel lost when you come back to this project in six months.

Here is your **Master Guide** for the *Rooted Leader / Integrative Practitioner* project.

---

# 📘 The Armchair Futurist’s Web Deployment Protocol

## 1. The Architecture (How it works)
It helps to visualize the "pipeline" you built. You don't update the live site directly; you update the code, and the robots do the rest.

1.  **Cloud Shell:** Your "Workshop." This is where you write code and preview changes.
2.  **GitHub:** Your "Vault." This saves your code history.
3.  **GitHub Actions:** The "Robot." When you save to the Vault (GitHub), this robot wakes up, builds your site, and sends it to Firebase.
4.  **Firebase:** The "Server." This hosts the files.
5.  **Bluehost:** The "Address." Redirects visitors to the Firebase server.

---

## 2. Routine Maintenance: How to Make Changes
**Do not** edit files directly on GitHub. **Do not** try to create "Releases" manually. The easiest and safest workflow is to go back to **Google Cloud Shell**, just like you did today.

### Step 1: Open Your Workshop
1.  Go to [shell.cloud.google.com](https://shell.cloud.google.com).
2.  Make sure you are in the correct directory. If you just opened the window, type:
    ```bash
    cd the-rooted-leader
    ```
    *(Or whatever your folder name is. You can type `ls` to list folders to check).*

### Step 2: Sync with the Vault (Crucial!)
Before you touch *anything*, always make sure your Cloud Shell matches what is on GitHub (just in case you made a change elsewhere).
```bash
git pull
```

### Step 3: Turn on "Dev Mode"
You want to see your changes *before* the world sees them.
1.  Run this command to start a local preview server:
    ```bash
    yarn dev
    ```
2.  Cloud Shell will say something like `Local: http://localhost:5173/`.
3.  Click the **"Web Preview"** button (top right of the terminal, looks like an eye or a square with an arrow) -> **Preview on port 5173**.
4.  This opens a tab where you can see your edits happen in real-time.

### Step 4: Make Your Edits
1.  Open the **Cloud Shell Editor** (click "Open Editor" if it's closed).
2.  Navigate to your files (usually inside `src/` or `components/`).
3.  Change text, swap images, or update colors.
4.  Check the Preview tab to make sure it looks good.

### Step 5: Save and "Push" (The Magic Step)
Once you are happy with the changes, you need to send them to GitHub.
*(If `yarn dev` is still running, press `Ctrl + C` in the terminal to stop it so you can type commands).*

Run these three commands:

1.  **Stage the files** (Get them ready):
    ```bash
    git add .
    ```
2.  **Save the files** (Create a checkpoint):
    ```bash
    git commit -m "Updated the homepage text"
    ```
    *(Replace the message in quotes with whatever you actually did).*
3.  **Upload to GitHub** (Trigger the robot):
    ```bash
    git push
    ```

**That’s it!**
*   Once `git push` finishes, GitHub detects the change.
*   GitHub automatically builds your site (running `yarn build` for you).
*   GitHub deploys the result to Firebase.
*   Your live site (`theintegrativepractitioner.com`) updates in about 2-3 minutes automatically.

---

## 3. Setup Reference (For New Projects)
If you ever need to build a **new** website from scratch, here is the shorthand version of what we did today:

1.  **Generate:** Create the prototype in **AI Studio / Stitch**.
2.  **Environment:** Open **Google Cloud Shell**.
3.  **Code:** Download/Upload the code to Shell.
4.  **Dependencies:** Run `yarn` (or `npm install`) to install the tools.
5.  **Build Check:** Run `yarn build` to make sure it actually works.
6.  **Git Init:**
    *   `git init`
    *   Create a `.gitignore` file (Ignore: `node_modules`, `.cache`, `dist`).
    *   `git add .` and `git commit -m "first"`.
7.  **GitHub Repo:** Create a blank repo on GitHub, then link it:
    *   `git remote add origin [URL]`
    *   `git branch -M main`
    *   `git push -u origin main`
8.  **Firebase Init:**
    *   `firebase login`
    *   `firebase init hosting` (Choose: Existing Project -> Public dir: `dist` -> SPA: Yes -> GitHub: Yes).
    *   **Crucial:** When it asks for the build script, use `yarn && yarn build` (if using Yarn).
9.  **DNS (Bluehost):**
    *   Add Custom Domain in Firebase Console.
    *   In Bluehost: Delete old A-Records. Add new A-Records (`@` points to Firebase IP). Add `www` CNAME.

---

## 4. Troubleshooting Cheat Sheet

*   **"Permission Denied" on Git Push:**
    *   You probably need to regenerate your **Personal Access Token** in GitHub (Settings > Developer Settings > Tokens) and paste that as your password.
*   **"Content Hash Mismatch" Error:**
    *   You are trying to run `firebase deploy` manually while uploading the root folder. **Don't do this.** Use `git push` and let GitHub handle the deployment.
*   **Site is blank:**
    *   Check your `firebase.json` file. Ensure `"public": "dist"`.
*   **Changes aren't showing up live:**
    *   Go to your GitHub Repository page. Click the **"Actions"** tab.
    *   Is the circle green? (Success). Is it red? (The build failed—click it to see why).
