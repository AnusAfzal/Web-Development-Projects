# Blog Website (Node.js + Express + EJS)

This is a full-stack blog web application built using Node.js, Express, and EJS. It allows users to create, read, update, and delete blog posts using a simple and clean interface.

---

## 🚀 Features

- Create new blog posts
- View all blog posts
- View single blog post in detail
- Edit existing posts
- Delete posts
- Dynamic server-side rendering using EJS
- RESTful routing structure

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- HTML, CSS
- UUID (for unique IDs)
- Method-Override (for PATCH & DELETE requests)

---

## 📁 Project Structure
<<<<<<< HEAD
│
├── views/
│ ├── index.ejs # Home page (all blogs)
│ ├── new.ejs # Create new blog
│ ├── show.ejs # View single blog
│ ├── edit.ejs # Edit blog
│
├── public/
│ ├── style.css # Main styling
│ ├── newBlogStyle.css
│ ├── editBlogStyle.css
│ └── showBlogStyle.css
│
├── app.js # Main server file
├── package.json
├── package-lock.json
└── README.md
=======
- │
- ├── views/
- │ ├── index.ejs # Home page (all blogs)
- │ ├── new.ejs # Create new blog
- │ ├── show.ejs # View single blog
- │ ├── edit.ejs # Edit blog
- │
- ├── public/
- │ ├── style.css # Main styling
- │ ├── newBlogStyle.css
- │ ├── editBlogStyle.css
- │ └── showBlogStyle.css
- │
- ├── app.js # Main server file
- ├── package.json
- ├── package-lock.json
- └── README.md
>>>>>>> e72c62a3dcc10d82f187daf81d15e970d3b63ccb


---

## 📌 RESTful Routes

| Action            | Route               | Method |
|------------------|-------------------|--------|
| Show all blogs   | /home              | GET    |
| New blog form    | /home/new          | GET    |
| Create blog      | /home              | POST   |
| Show single blog | /home/:id          | GET    |
| Edit blog form   | /home/:id/edit     | GET    |
| Update blog      | /home/:id          | PATCH  |
| Delete blog      | /home/:id          | DELETE |

---
