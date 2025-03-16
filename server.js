import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // ✅ Use import instead of require

const app = express();
app.use(cors());

app.get("/api/swiggy", async (req, res) => {
    try {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9124323&lng=77.57087229999999&str=restaurants");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
