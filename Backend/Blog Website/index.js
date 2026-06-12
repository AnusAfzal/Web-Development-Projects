const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let blogBody = [
    {
        id: uuidv4(),
        title: "Computer",
        author: "Anus",
        content: "Computer Science is a vast field with many branches."
    },
]

app.get("/", (req, res) => {
    res.send("website is working.");
});

app.get("/home", (req, res) => {

    res.render("index.ejs", { blogBody })
});

app.get("/home/new", (req, res) => {
    res.render("newBlog.ejs");
});

app.post("/home", (req, res) => {
    let { title, author, content } = req.body;
    let id = uuidv4();
    console.log(req.body);
    blogBody.push({ title, author, content, id });
    res.redirect("/home");
});

app.get("/home/:id", (req, res) => {
    let { id } = req.params;
    let blog = blogBody.find((b) => id == b.id);
    res.render("showBlog.ejs", { blog })
});

app.patch("/home/:id", (req, res) => {
    let { id } = req.params;
    let { title, content } = req.body;
    let blog = blogBody.find((b) => b.id === id);
    if (blog) {
        blog.title = title;
        blog.content = content;
    }
    res.redirect("/home");
});

app.get("/home/:id/edit", (req, res) => {
    let { id } = req.params;
    let blog = blogBody.find((b) => id == b.id);
    res.render("editBlog.ejs", { blog });
});

app.delete("/home/:id", (req, res) => {
    let { id } = req.params;
    blogBody = blogBody.filter((b) => id !== b.id);
    res.redirect("/home");
})

app.listen(port, () => {
    console.log(`Listening to port ${port}.`);
});