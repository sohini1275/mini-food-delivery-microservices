const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const PORT = 5001;
const JWT_SECRET = "mycollegeprojectsecret";

const users = [];

app.post("/register", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: "Username and password required"
        });
    }

    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    users.push({ username, password });

    res.json({
        message: "User registered successfully"
    });
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        user => user.username === username && user.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign(
        { username: user.username },
        JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({
        message: "Login successful",
        token
    });
});

app.post("/verify", (req, res) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token missing"
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        res.json({
            valid: true,
            user: decoded
        });
    } catch (error) {
        res.status(401).json({
            valid: false,
            message: "Invalid token"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
});
