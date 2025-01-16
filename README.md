# How to Push a Local Repository to GitHub from VS Code Without Initializing in GitHub

## Step 1: Create a Local Git Repository

If you haven't already, initialize a Git repository in your project directory:

1. Open the project folder in VS Code.
2. Open the terminal (`Ctrl + ``).
3. Run the following command:
   ```bash
   git init
   ```
   This initializes a Git repository in the current folder.
4. Add files to the staging area:
   ```bash
   git add .
   ```
5. Commit the changes:
   ```bash
   git commit -m "Initial commit"
   ```

---

## Step 2: Install GitHub CLI (if not installed)

If the `gh` command is not found, install GitHub CLI using the instructions below based on your operating system:

### macOS

1. Install using Homebrew:
   ```bash
   brew install gh
   ```
2. Verify the installation:
   ```bash
   gh --version
   ```

---

## Step 3: Authenticate GitHub CLI

After installing GitHub CLI, log in to your GitHub account:

```bash
gh auth login
```

Follow the interactive prompts to authenticate with your GitHub account.

---

## Step 4: Create a GitHub Repository via CLI

Now, create a repository directly from the terminal:

```bash
gh repo create <repo-name> --public
```

Replace `<repo-name>` with your desired repository name. Use `--private` for a private repository.

---

## Step 5: Add the GitHub Repository as a Remote

1. Copy the repository URL from the CLI output. It will look like this:

   - HTTPS: `https://github.com/<username>/<repo-name>.git`
   - SSH: `git@github.com:<username>/<repo-name>.git`

2. Add the GitHub repository as a remote to your local Git repository:
   ```bash
   git remote add origin <repository-url>
   ```

---

## Step 6: Push Your Local Repository to GitHub

1. Push the main branch to GitHub:

   ```bash
   git push -u origin main
   ```

   If your branch is named something other than `main`, replace `main` with the correct branch name.

2. Your local repository is now pushed to GitHub, and the remote repository is linked to your local repo.

---

## Alternative: Create the Repository Manually

If you prefer not to use GitHub CLI, create the repository manually:

1. Go to [GitHub.com](https://github.com).
2. Click the **+** icon in the top-right corner and select **New Repository**.
3. Enter a repository name, choose visibility (public or private), and click **Create Repository**.
4. Use the provided GitHub instructions to add a remote and push your code. For example:
   ```bash
   git remote add origin https://github.com/<username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```

---

## Final Step: Verify the Repository

Go to your GitHub account in your browser and check if the repository has been created and the files have been pushed successfully.
