# Student Management REST API

A lightweight RESTful API built with **Node.js** and **Express.js** to manage student records. Data persistence is handled via synchronous file operations on a local JSON database, complete with custom request logging middleware.

---

## Features

- **Full CRUD Operations**: Create, Read, Update (full and partial), and Delete student records.
- **Custom Logging Middleware**: Captures and logs the HTTP method, request path, and exact timestamp to the server console for every request.
- **Local JSON Storage**: Persists data across server restarts using Node.js `fs` (`readFileSync`, `writeFileSync`).
- **Modular Architecture**: Clean separation between routing, custom middleware, and the application entry point.

---

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Development Tool**: Nodemon
- **API Testing**: Thunder Client / Postman

---

## Project Structure

```text
assignment/
├── data/
│   └── students.json       # JSON data store
├── middleware/
│   └── logger.js           # Custom request logging middleware
├── routes/
│   └── studentroute.js     # CRUD route handlers
├── .gitignore              # Ignores node_modules
├── app.js                  # Express server entry point
├── package-lock.json
└── package.json
