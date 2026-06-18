const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const PORT = 5003;

const orders = [];

app.post("/order", async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        const { itemId, quantity } = req.body;

        if (!authHeader) {
            return res.status(401).json({
                message: "Authorization token required"
            });
        }

        if (!itemId || !quantity) {
            return res.status(400).json({
                message: "itemId and quantity required"
            });
        }

        const authResponse = await axios.post(
            "http://localhost:5001/verify",
            {},
            {
                headers: {
                    Authorization: authHeader
                }
            }
        );

        const user = authResponse.data.user;

        const menuResponse = await axios.get(
            `http://localhost:5002/menu/${itemId}`
        );

        const item = menuResponse.data;

        const totalPrice = item.price * quantity;

        const order = {
            orderId: orders.length + 1,
            username: user.username,
            itemName: item.name,
            quantity,
            totalPrice
        };

        orders.push(order);

        res.json({
            message: "Order placed successfully",
            order
        });

    } catch (error) {
        if (error.response) {
            return res.status(error.response.status).json({
                message: error.response.data.message || "Service error"
            });
        }

        res.status(500).json({
            message: "Internal server error"
        });
    }
});

app.get("/orders", (req, res) => {
    res.json(orders);
});

app.listen(PORT, () => {
    console.log(`Order Service running on port ${PORT}`);
});
