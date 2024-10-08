import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import issueRoutes from "./routes/issueRoutes.js";
import cors from "cors";
import connectDB from "./config/mongodb.js";

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// health check API
app.get("/", (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  try {
    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
});

app.use("/api", issueRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
