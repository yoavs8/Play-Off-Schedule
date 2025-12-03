import express from "express";
import { STATUS_CODES } from "http";
import ViteExpress from "vite-express";

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
const  statusGood=200;
const  statusBad=200;

app.post("/fetch/:url", async (req, res) => {
  try {
    console.log("Incoming /fetch with param:", req.body.url);

    const data = await fetchData(req.body.url);
    res.status(statusGood).json(data);
  } catch (error) {
    console.error("Error in /fetch:", error);
    res.status(statusBad).json({ error: "Failed to fetch data" });
  }
});

// app.get("/fetch/:url",(req,res)=>{
//   res.status(status).json(fetchData(req.params.url))
// })

//const apiKey = "YOUR_API_KEY";
const apiKey = "JSU19uyptEfTjmhbQtYMbmXoOjc60kydzpePFk3m7QRKKbBUadASpkDHO6cpwuGk";
export const fetchData = (url: string) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "X-TBA-Auth-Key": apiKey,
      "Content-Type": "application/json",
    },
    mode:"cors"
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.error("Error:", error));
};

ViteExpress.listen(app, 5173, () => console.log("Server running on http://localhost:5173"));

