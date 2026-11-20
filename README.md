# React Routing & Firebase Authentication

A simple React app with multiple pages, React Router navigation, Firebase Authentication and protected routes.

**Course:** Tools & Technologies for Internet Programming
**Name:** Tasib Mohammed Tanvirul Absar
**Student ID:** C243269

## Features

- Register with email and password
- Login and logout using Firebase Authentication
- Navbar changes based on login status
- Protected routes: Dashboard and Profile need a logged-in user
- User stays logged in after refreshing the page

## Pages

| Page      | Route        | Access    |
|-----------|--------------|-----------|
| Home      | `/`          | Public    |
| Login     | `/login`     | Public    |
| Register  | `/register`  | Public    |
| Dashboard | `/dashboard` | Protected |
| Profile   | `/profile`   | Protected |

If a logged-out user opens a protected page, they are redirected to `/login`.

## Technologies Used

- React (Vite)
- React Router (`react-router-dom`)
- Firebase Authentication

## Project Structure

```
src/
  components/
    Navbar.jsx
    ProtectedRoute.jsx
  pages/
    Home.jsx
    Login.jsx
    Register.jsx
    Dashboard.jsx
    Profile.jsx
  App.jsx
  main.jsx
  firebase.js
```

## How to Run

1. Clone the repository and open the project folder:
   ```
   git clone https://github.com/callmetasib-cmyk/React-Assignment.git
   cd cd React-Assignment 
2. Install the packages:
   ```
   npm install
   ```
3. Start the app:
   ```
   npm run dev
   ```
4. Open the link shown in the terminal (usually `http://localhost:5173`).

## Firebase Setup

The Firebase config is in `src/firebase.js`. To use your own Firebase project:

1. Create a project in the Firebase Console.
2. Go to Authentication and enable the **Email/Password** sign-in method.
3. Register a web app and copy its config into `src/firebase.js`.

## How It Works

- **Routing:** `BrowserRouter`, `Routes`, `Route` and `Link` handle navigation between pages.
- **Authentication:** `createUserWithEmailAndPassword`, `signInWithEmailAndPassword` and `signOut` handle register, login and logout.
- **Auth state:** `onAuthStateChanged` in `App.jsx` tracks the current user, so the login persists after a refresh.
- **Protected routes:** the `ProtectedRoute` component redirects to `/login` using `Navigate` if there is no user.
