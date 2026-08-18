const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// 1. Basic Route (/)
app.get("/", (req, res) => {
    res.send("Welcome to the ExpressJS Routing Demo!");
});

// 2. Route Parameter (/user/:id)
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// 3. Query Parameters (/search?q=express&limit=5)
app.get("/search", (req, res) => {
    const query = req.query.q;
    const limit = req.query.limit;

    res.json({
        searchQuery: query,
        limit: limit
    });
});

// 4. URL Building using req.originalUrl
app.get("/info", (req, res) => {
    res.send(`The requested URL is: ${req.originalUrl}`);
});

// Redirect example
app.get("/home", (req, res) => {
    res.redirect("/");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
