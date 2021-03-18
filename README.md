# Dossier

## Git commands

To configure git account
```
git config --global user.email "anyone@gmail.com"
git sonfig --global user.name "username"
```

To set up new repository
```
echo "# title " >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Altruy/repository.git
git push -u origin main
```
To make new branch
```
git branch -M newBranchName
```
To stage changes and commit
```
git add --all && git commit -m "commit message"
```
To publish/push
```
git push -u origin branchName
```
To change branch
```
git checkout branchName
```
To make newBranch from main
```
git checkout -b newBranch main
```
To pull from branch
```
git pull origin branchName 
```
To merge subBranch to main
```
git checkout main && git merge subBranch
```
