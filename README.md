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


## Copy Instructions

### Clone the repository

1. Clone the repo to your local setup by running `git clone https://github.com/lablueprint/bp-nextjs-starter-code.git` in your terminal in the directory you'd like.
2. Enter the new folder via `cd bp-nextjs-starter-code`.

### Part 2: Make your own repository on GitHub

1. Go to https://github.com/.
2. Log in to your GitHub account.
3. Click the "+" sign in the upper right corner and select "New repository" from the dropdown menu.
4. Fill in the repository name, description, and other details, then click the "Create repository" button.

### Part 3: Connect the copied repository to your new GitHub repository 
1. From the folder with the starter code, remove the connection to the initial repository (the remote named **`origin`**) by running `git remote remove origin`.
    
2. Run `git remote add origin new_repository_url` to add the URL of your new GitHub repository as the remote repo. Replace **`new_repository_url`** with the URL of the new repository you created. For example: `git remote add origin https://github.com/yourusername/my-nextjs-project.git`.
    
### Part 4: Push your code
1. Make changes to your code in the local repository.
2. Add all changed files to the stage using `git add *`.
3. Commit your changes using `git commit -m [message]`. Add a message to commit successfully.
4. Push your code to the new repository on GitHub by running `git push -u origin main`.

## Running

1. Install the necessary modules to run the application by running `npm install`.

2. To run your app locally, run `npm run dev` in terminal in the directory with all the code.