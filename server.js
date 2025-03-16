import express from "express";
import cors from "cors";
import fetch from "node-fetch"; // ✅ Use import instead of require

const app = express();
app.use(cors());

app.get("/api/swiggy", async (req, res) => {
    try {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9124323&lng=77.57087229999999&str=restaurants&trackingId=7d9b519d-0598-d583-bce4-b5f6a39fcc5f&submitAction=ENTER&queryUniqueId=e910bd49-c203-0ed3-a121-6f0cbab8dfb6",{
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.0.0 Safari/537.36",
                "Accept": "application/json",
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});


app.get("/api/swiggy/details/:id", async (req, res) => {
    try {
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9124323&lng=77.57087229999999&restaurantId=${req.params.id}`,{
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.0.0 Safari/537.36",
                "Accept": "application/json",
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }

    
})

app.listen(5000, () => console.log("Server running on port 5000"));
