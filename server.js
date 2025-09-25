const express = require("express");
const bodyParser = require("body-parser");

const webhookRoutes = require("./src/routes/webhook");

const app = express();
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Zobot webhook server is running', status: 'active' });
});

// Routes
app.use("/zobot-webhook", webhookRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Zobot webhook server running on port ${PORT}`);
});
