# Git and GitHub Tutorial

Welcome to the Git and GitHub tutorial! This repository is designed to help you learn the basics of Git and GitHub, two essential tools for version control and collaboration in software development.

## Table of Contents

1. [Introduction to Git and GitHub](#introduction-to-git-and-github)
2. [Setting Up Git](#setting-up-git)
3. [Basic Git Commands](#basic-git-commands)
4. [Working with GitHub](#working-with-github)
5. [Collaboration with GitHub](#collaboration-with-github)
6. [Advanced Git Topics](#advanced-git-topics)
7. [Resources](#resources)

## Introduction to Git and GitHub

### What is Git?
Git is a distributed version control system that helps you track changes in your code, collaborate with others, and manage different versions of your project.

### What is GitHub?
GitHub is a web-based platform that uses Git for version control. It provides a place to host your repositories, collaborate with others, and manage projects.

## Setting Up Git

1. **Install Git**: Download and install Git from [git-scm.com](https://git-scm.com/).
2. **Configure Git**: Set up your username and email.
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
3. **Check Installation**: Verify that Git is installed correctly.
   ```bash
   git --version
   ```

## Basic Git Commands

### Initialize a Repository
```bash
git init
```

### Clone a Repository
```bash
git clone <repository-url>
```

### Check Status
```bash
git status
```

### Add Files to Staging Area
```bash
git add <file-name>
```

### Commit Changes
```bash
git commit -m "Your commit message"
```

### View Commit History
```bash
git log
```

### Push Changes to Remote Repository
```bash
git push origin <branch-name>
```

### Pull Changes from Remote Repository
```bash
git pull origin <branch-name>
```

## Working with GitHub

### Create a Repository on GitHub
1. Log in to GitHub.
2. Click on the "+" sign in the top right corner and select "New repository".
3. Fill in the repository name, description, and choose public or private.
4. Click "Create repository".

### Connect Local Repository to GitHub
```bash
git remote add origin <repository-url>
```

### Push to GitHub
```bash
git push -u origin main
```

## Collaboration with GitHub

### Fork a Repository
1. Navigate to the repository you want to fork on GitHub.
2. Click the "Fork" button in the top right corner.

### Create a Pull Request
1. Make changes in your forked repository.
2. Navigate to the "Pull Requests" tab and click "New Pull Request".
3. Compare changes and create the pull request.

### Review and Merge Pull Requests
1. Navigate to the pull request.
2. Review the changes.
3. Click "Merge Pull Request".

## Advanced Git Topics

### Branching and Merging
```bash
git branch <branch-name>
git checkout <branch-name>
git merge <branch-name>
```

### Resolving Merge Conflicts
1. Open the conflicted file.
2. Resolve the conflict.
3. Add the resolved file.
4. Commit the changes.

## Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)


```bash

PS C:\Users\saniy\Desktop\personal\GIT-class> git branch
* main
PS C:\Users\saniy\Desktop\personal\GIT-class> git remote
origin
PS C:\Users\saniy\Desktop\personal\GIT-class> git branch test
PS C:\Users\saniy\Desktop\personal\GIT-class> git branch
* main
  test
PS C:\Users\saniy\Desktop\personal\GIT-class> git checkout test
Switched to branch 'test'
PS C:\Users\saniy\Desktop\personal\GIT-class> git branch
  main
* test
PS C:\Users\saniy\Desktop\personal\GIT-class> git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\saniy\Desktop\personal\GIT-class> git branch
* main
  test
PS C:\Users\saniy\Desktop\personal\GIT-class> git checkout -b login
Switched to a new branch 'login'
PS C:\Users\saniy\Desktop\personal\GIT-class> git branch
* login
  main
  test
PS C:\Users\saniy\Desktop\personal\GIT-class> git checkout test
Switched to branch 'test'
PS C:\Users\saniy\Desktop\personal\GIT-class> git add .
PS C:\Users\saniy\Desktop\personal\GIT-class> git status
On branch test
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   text.html

PS C:\Users\saniy\Desktop\personal\GIT-class> git commit -m "test file created"
[test b2f9a95] test file created
 1 file changed, 1 insertion(+)
 create mode 100644 text.html
PS C:\Users\saniy\Desktop\personal\GIT-class> git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\saniy\Desktop\personal\GIT-class> git branch
  login
* main
  test
PS C:\Users\saniy\Desktop\personal\GIT-class> git checkout test
Switched to branch 'test'
PS C:\Users\saniy\Desktop\personal\GIT-class> git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\Users\saniy\Desktop\personal\GIT-class> git marge test
git: 'marge' is not a git command. See 'git --help'.

The most similar command is
        merge
PS C:\Users\saniy\Desktop\personal\GIT-class> git merge test
Updating 5fa6f88..b2f9a95
Fast-forward
 text.html | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 text.html
PS C:\Users\saniy\Desktop\personal\GIT-class> 
```