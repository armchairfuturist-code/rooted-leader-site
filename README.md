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

MANUAL MODE (if GitHub actions aren't working)

Here is your 2-step process to update the live site instantly:

### Step 1: Build the Site
You need to tell Yarn to take your code and create the final website files (the `dist` folder).

```bash
yarn build
```
*(Wait until it says "Done" or "built in X seconds")*

### Step 2: Deploy the Site
Now, take that `dist` folder and send it to Firebase.

```bash
firebase deploy --only hosting
```

### That's it!
*   **Pros:** It is instant. You see the changes live in about 30 seconds.
*   **Cons:** It doesn't back up your code to GitHub automatically.

**Important Reminder:**
Even if you deploy manually like this, you should still occasionally save your code to GitHub just so you don't lose your work if Cloud Shell resets:

```bash
git add .
git commit -m "saving work"
git push
```
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

## 5. Using Antigravity

(Google's new "Agentic" IDE) is essentially a super-powered version of VS Code. Because it is built on standard tools, **using it will not break your Cloud Shell workflow.**

You can switch back and forth as much as you like. Here is the "Hybrid" mental model:
*   **GitHub** is the "Central Vault" (The Truth).
*   **Cloud Shell** is one door into the vault.
*   **Antigravity** is a second (fancier) door into the vault.

As long as you **Push** your changes from Antigravity to GitHub, Cloud Shell will see them (once you `git pull`).

Here is your step-by-step guide to moving into Antigravity with **no prior knowledge**.

---

### Phase 1: Install & Clone (Getting the code)

Antigravity is likely a desktop application you download. Once you have installed it and opened it, follow these steps to pull your project down from the cloud.

1.  **Get your "Clone URL" first:**
    *   Go to your repository: `https://github.com/armchairfuturist-code/rooted-leader-site`
    *   Click the green **Code** button.
    *   Copy the **HTTPS** URL (it ends in `.git`).

2.  **Open Antigravity:**
    *   You will likely see a Welcome screen.
    *   Look for a button that says **"Clone Git Repository"** (or sometimes just "Clone Repo").
    *   *If you don't see it:* Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on Mac) to open the Command Palette, type `Git: Clone`, and press Enter.

3.  **Paste the URL:**
    *   Paste the URL you copied in Step 1.
    *   It will ask you to select a folder on your computer to save it. Choose somewhere easy to find (like `Documents/Projects`).

4.  **Open the Project:**
    *   Once it downloads, a popup will ask "Would you like to open the cloned repository?"
    *   Click **Open**.

### Phase 2: Setup the Environment (The "Node/Yarn" Step)

Your computer doesn't know about the project's tools yet (Node, Yarn, etc.) like Cloud Shell did. Antigravity should handle this, but you need to trigger it.

1. **Open the Terminal:**
    * In Antigravity, look at the top menu: **Terminal > New Terminal**. (It usually appears at the bottom).
2. **Install Dependencies:**
    * Type this command and hit Enter:

```bash
yarn
```

    * *Note:* If it says "yarn command not found," you might need to install Node.js on your computer first. However, Antigravity usually includes these tools or asks to install them for you.

### Phase 3: The "Agentic" Workflow (Making Changes)

This is where Antigravity shines. Instead of just typing code, you can use the AI agent.

1. **Run the Dev Server:**
    * In the terminal, type:

```bash
yarn dev
```

    * It will give you a local URL (e.g., `http://localhost:5173`).
    * **Ctrl + Click** that link to open your site in your Chrome browser.
2. **Make a Change (The AI Way):**
    * Locate the **Agent Sidebar** (usually on the right or left, looking like a sparkle or robot icon).
    * Type a command like: *"Update the Hero section text to say 'Welcome to the Future' and make the background slightly darker."*
    * The Agent will read your files, plan the change, and present it to you.
    * **Accept** the changes if they look good.

### Phase 4: Saving to the Vault (Syncing)

When you are done working in Antigravity, you **must** send the changes to GitHub so your Cloud Shell (and your automated deployment robot) can see them.

1. **Click the "Source Control" Icon:**
    * It looks like a branch `Y` icon on the sidebar.
2. **Stage \& Commit:**
    * You will see a list of changed files.
    * Type a message in the box (e.g., "Updated hero text via Antigravity").
    * Click the **Commit** (or checkmark) button.
3. **Sync (Push):**
    * Click the big blue **Sync Changes** button (or `Push`).
    * *First time setup:* It will likely open your browser to ask you to log in to GitHub. Authorize it.

---

### How to keep "Cloud Shell" working

If you travel and want to use Cloud Shell again, you just need to update it with the work you did in Antigravity.

1. Open Cloud Shell.
2. Type:

```bash
git pull
```

3. That's it! Cloud Shell now matches Antigravity.

### Summary Checklist for Antigravity

1. **Clone** your repo using the GitHub URL.
2. Run **`yarn`** to install tools.
3. Run **`yarn dev`** to preview.
4. **Sync/Push** changes via the Source Control tab to trigger the live deployment.

Here are your updated instructions with npm in place of yarn. I kept all other content and structure unchanged.

### Phase 2: Setup the Environment (The "NPM" Step)

Your computer doesn't know about the project's tools yet (Node, npm, etc.) like Cloud Shell did. Antigravity should handle this, but you need to trigger it.

1. **Open the Terminal:**
    * In Antigravity, look at the top menu: **Terminal > New Terminal**. (It usually appears at the bottom).
2. **Install Dependencies:**
    * Type this command and hit Enter:

```bash
npm install
```

    * *Note:* If npm isn't installed, you might need to install Node.js on your computer first. However, Antigravity usually includes these tools or asks to install them for you.

### Phase 3: The "Agentic" Workflow (Making Changes)

This is where Antigravity shines. Instead of just typing code, you can use the AI agent.

1. **Run the Dev Server:**
    * In the terminal, type:

```bash
npm run dev
```

    * It will give you a local URL (e.g., `http://localhost:5173`).
    * **Ctrl + Click** that link to open your site in your Chrome browser.
2. **Make a Change (The AI Way):**
    * Locate the **Agent Sidebar** (usually on the right or left, looking like a sparkle or robot icon).
    * Type a command like: *"Update the Hero section text to say 'Welcome to the Future' and make the background slightly darker."*
    * The Agent will read your files, plan the change, and present it to you.
    * **Accept** the changes if they look good.

### Phase 4: Saving to the Vault (Syncing)

When you are done working in Antigravity, you **must** send the changes to GitHub so your Cloud Shell (and your automated deployment robot) can see them.

1. **Click the "Source Control" Icon:**
    * It looks like a branch `Y` icon on the sidebar.
2. **Stage \& Commit:**
    * You will see a list of changed files.
    * Type a message in the box (e.g., "Updated hero text via Antigravity").
    * Click the **Commit** (or checkmark) button.
3. **Sync (Push):**
    * Click the big blue **Sync Changes** button (or `Push`).
    * *First time setup:* It will likely open your browser to ask you to log in to GitHub. Authorize it.

***

### How to keep "Cloud Shell" working

If you travel and want to use Cloud Shell again, you just need to update it with the work you did in Antigravity.

1. Open Cloud Shell.
2. Type:

```bash
git pull
```

3. That's it! Cloud Shell now matches Antigravity.

### Summary Checklist for Antigravity

1. **Clone** your repo using the GitHub URL.
2. Run **`npm install`** to install tools.
3. Run **`npm run dev`** to preview.
4. **Sync/Push** changes via the Source Control tab to trigger the live deployment.
