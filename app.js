const express = require("express");
const app = express();

// Serve static files from "public" folder
app.use(express.static("public"));

// API example (optional)
app.get("/api/status", (req, res) => {
  res.json({ status: "running" });
});

// MUST match Dockerfile exposed port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

