const express = require("express");

const app = express();
const PORT = 5002;

const menu = [
    { id: 1, name: "Burger", price: 120 },
    { id: 2, name: "Pizza", price: 250 },
    { id: 3, name: "Pasta", price: 180 },
    { id: 4, name: "French Fries", price: 90 }
];

app.get("/menu", (req, res) => {
    res.json(menu);
});

app.get("/menu/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const item = menu.find(food => food.id === id);

    if (!item) {
        return res.status(404).json({
            message: "Food item not found"
        });
    }

    res.json(item);
});

app.listen(PORT, () => {
    console.log(`Menu Service running on port ${PORT}`);
});
