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
`npm i`

## Running
`npm run dev`