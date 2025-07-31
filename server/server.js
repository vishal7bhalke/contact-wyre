import express from "express";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactroute.js";
import MongoDB from "./db.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


MongoDB();

// Routes
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Wyreflow API");
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
