# Lab Exercise: Collaborative Git Workflow — Explore India

**Live checklist:** [GIT-COLLABORATION-TASKSHEET.md](GIT-COLLABORATION-TASKSHEET.md)

**Team:** 3 students  
**Deadline:** Today, 11:59 PM  
**Duration:** 2–3 hours  
**Level:** Beginner DevOps

## Objective

Work together on this existing static travel website while learning the basic Git and GitHub/GitLab workflow.

The repository contains:

- `index.html` — website structure
- `css/style.css` — styling
- `scripts/script.js` — button interaction
- `images/` — destination images

## Learning outcomes

By completing this exercise, you should be able to:

1. Configure Git locally.
2. Understand local and remote repositories.
3. Create and use branches.
4. Make meaningful commits.
5. Push branches to GitHub/GitLab.
6. Create and review Pull Requests/Merge Requests.
7. Merge branches safely.
8. Create and resolve a merge conflict.
9. View project history.
10. Document your work in a README.

## Team roles

| Student | Responsibility |
|---|---|
| Omkaar | Team lead, repository setup, reviews, final integration |
| Aadharsh | HTML/CSS improvement |
| Ananya | JavaScript/content improvement |

Omkaar should review and merge PRs. Nobody should merge their own PR.

## Part 1 — Configure and inspect Git

Each student runs:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
git config --global init.defaultBranch main
git config --global --list
```

Inspect the repository:

```bash
git status
git branch -a
git remote -v
git log --oneline --graph --all
```

Open `index.html` in a browser and check that the page loads correctly.

## Part 2 — Create a development branch

Student 1 creates and pushes the shared development branch:

```bash
git switch -c development
git push -u origin development
```

From now on:

- `main` = stable version
- `development` = team integration branch
- `feature/*` = individual work

If possible, enable branch protection for `main` and require Pull Requests.

## Part 3 — Feature branches

Each student first updates their local repository:

```bash
git fetch origin
git switch development
git pull origin development
```

### Aadharsh: UI improvement

Create `feature/ui-improvement`. Make two or more improvements, such as better navigation/button styling, mobile spacing, keyboard focus, or card layout.

```bash
git add css/style.css index.html
git commit -m "Improve Explore India user interface"
git push -u origin feature/ui-improvement
```

### Ananya: JavaScript or content improvement

Create `feature/destination-interaction`. Add a welcome/details interaction, simple destination filter, or improved destination content.

```bash
git add index.html scripts/script.js
git commit -m "Add destination interaction"
git push -u origin feature/destination-interaction
```

### Omkaar: Documentation

Create `feature/project-documentation`. Add `README.md` containing the project description, team members, technologies, run instructions, and branching strategy.

```bash
git add README.md
git commit -m "Document Explore India project"
git push -u origin feature/project-documentation
```

## Part 4 — Pull Requests

Each student opens a PR/MR:

```text
feature branch → development
```

Each PR must contain a summary, files changed, and testing steps. Student 1 reviews the other PRs and checks that the page works, the change is understandable, and the commit message is meaningful. Merge approved PRs into `development`.

## Part 5 — Deliberate merge conflict

1. Aadharsh creates `feature/title-change-a`.
2. Ananya creates `feature/title-change-b`.
3. Both change the same heading in `index.html` to different text.
4. Commit and push both branches.
5. Merge Aadharsh’s PR first.
6. Ananya updates their branch:

```bash
git fetch origin
git switch feature/title-change-b
git merge origin/development
```

Git should report a conflict. Open `index.html`, choose the final heading, and remove all markers:

```text
<<<<<<< HEAD
=======
>>>>>>> development
```

Then run:

```bash
git add index.html
git commit -m "Resolve title merge conflict"
git push origin feature/title-change-b
```

Update and merge the PR after review. Discuss why the conflict happened and how you verified the site.

## Part 6 — Final integration

Run:

```bash
git switch development
git pull origin development
git log --oneline --graph --decorate --all
```

Student 1 opens a final PR from `development` to `main`. Review and merge it after confirming the website works.

## Deliverables

Submit the repository containing:

1. Working website files.
2. `main`, `development`, and at least three feature branches.
3. At least six meaningful commits.
4. At least three PRs/MRs.
5. One documented merge conflict and resolution.
6. Updated `README.md`.
7. Screenshots of a PR review, conflict, resolution, and final website.

## Assessment — 100 marks

| Activity | Marks |
|---|---:|
| Git configuration and inspection | 15 |
| Branches and commits | 20 |
| Feature implementation | 15 |
| PR creation and review | 20 |
| Conflict resolution | 20 |
| README and evidence | 10 |
| **Total** | **100** |

## Important commands

```bash
git status
git branch
git switch <branch>
git pull origin development
git add <file>
git commit -m "Meaningful message"
git push
git log --oneline --graph --all
```

Finish by ensuring `main` contains the reviewed, working Explore India website before 11:59 PM.
