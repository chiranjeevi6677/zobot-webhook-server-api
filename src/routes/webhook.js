
const express = require("express");
const { handleHeadCheck, handleWebhook } = require("../controllers/webhookController");

const router = express.Router();

// HEAD route (Zoho activation check)
router.head("/", handleHeadCheck);

// POST route (Zoho events)
// amazonq-ignore-next-line
router.post("/", handleWebhook);

module.exports = router;
