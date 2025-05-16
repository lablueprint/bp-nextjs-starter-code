# Hack2Impact Next.js Starter Code

This repository serves as a starter template for teams building web applications with Next.js using the latest dependencies.

## What's Included

### Core Features

- ✅ **Next.js 15** with App Router
- ✅ **React 19**
- ✅ **Tailwind CSS** for styling

## Quick Start

```bash
# Clone the repo
git clone https://github.com/lablueprint/bp-nextjs-starter-code.git

# Enter the directory
cd bp-nextjs-starter-code

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit http://localhost:3000 to see your app running!

## Setup Instructions

### Part 1: Clone the repository to your local setup

```bash
git clone https://github.com/lablueprint/bp-nextjs-starter-code.git
cd bp-nextjs-starter-code
```

### Part 2: Create your own repository on GitHub

1. Go to https://github.com/ and log in to your GitHub account.
2. Click the "+" sign in the upper right corner and select "New repository" from the dropdown menu.
3. Fill in the repository name, description, and other details, then click the "Create repository" button.
4. Connect the copied repository to your new GitHub repository:

```bash
# Remove connection to original repository
git remote remove origin

# Add your new repository (replace new_repository_url)
git remote add origin new_repository_url

# Push your code
git push -u origin main
```

Make sure to replace **`new_repository_url`** with the URL of the new repository you created. For example: `git remote add origin https://github.com/yourusername/my-nextjs-project.git`.

Basic Git Operations

After making some code changes:

```bash
# Add all changed files to the stage
git add *

# Commit your changes (add a message)
git commit -m [message]

# Push your code to GitHub
git push -u origin main

```

2. Add all changed files to the stage using `git add *`.
3. Commit your changes using `git commit -m [message]`. Add a message to commit successfully.
4. Push your code to the new repository on GitHub by running `git push -u origin main`.

## Running the code

To install the necessary modules and run your app locally, run the following in your terminal:

```bash
npm install
npm run dev
```

You should be able to your app running on the browser at http://localhost:3000.

## Features

### Layouts

- Root layout `/app/layout.js` with an example navbar
- Example layout for other pages `/about/layout.js`

### Routing

- routes `/about`, `/resources`
- nested routes `/about/contact`
- dynamic routes `/resources/[resource]`
- regular navigation `/app/navbar.js` with `Link`
- relative path navigation `/about` with `useRouter` and `usePathName`

### APIs

- `/app/api` has all the APIs used by the application
- `/app/api/about/route.js` shows how to use secrets for external APIs
- `.env` file to store secrets, used in the frontend and backend to prevent revealing private info

## Expanding

### Changing layouts

- add new files titled `layout.js` in the route
- main layout is `app/layout.js` to change the structuring of the page
- using a layout in `/about/layout.js` to add components

### Adding pages

- add `'use client';` if there seems to be a rendering issue
- navigate to new pages using `Link`
- add a new folder into `src/app` calling it the page route you want
  - i.e. new route of `www.example.com/experiences` has a folder of `app/experiences` and the code for the page is in `app/experiences/page.js`
- add components into the folder
- nest routes by adding additional folders
  - i.e. subroute `www.example.com/experiences/business` has a folder of `app/experiences/business`
- create dynamic routes by adding a brackets around a route name in a folder
  - i.e. `/resources/[resource]` allows you to pass parameters through the url which can be obtained by the following page

### Adding APIs

- add `.env` file and make sure it is already added to `.gitignore`
- create a new folder under `/app/api` with the new route you want to create
- add a `route.js` file under the folder to create an API handler for GET, POST, etc.
