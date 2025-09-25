// amazonq-ignore-next-line// HEAD check from Zoho SalesIQ
exports.handleHeadCheck = (req, res) => {
  console.log("HEAD check from Zoho SalesIQ ✅");
  res.sendStatus(200);
};

// Main webhook handler
exports.handleWebhook = (req, res) => {
  console.log("Incoming webhook payload:", JSON.stringify(req.body, null, 2));

  // Example response back to Zoho
  const responseJson = {
    action: "reply",
    replies: [
      { text: "Hello 👋! I'm your Zoho bot, how can I help you today?" }
    ]
  };

  res.status(200).json(responseJson);
};