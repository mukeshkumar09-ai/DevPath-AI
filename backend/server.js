const express = require("express");
const connectDB = require("./config/db");

const projectRoutes = require("./routes/projectRoutes");

const app = express();

// CONNECT DATABASE
connectDB();

app.use(express.json());

app.use("/api", projectRoutes);

app.get("/", (req, res) => {
  res.send("DevPath AI Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});