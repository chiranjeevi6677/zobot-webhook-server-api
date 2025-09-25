# Zobot Webhook Server

A simple Express.js webhook server for Zoho SalesIQ Zobot integration.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   node server.js
   ```

3. **Expose with ngrok:**
   ```bash
   ngrok http 3000
   ```

## Usage

- **Server runs on:** `http://localhost:3000`
- **Webhook endpoint:** `/zobot-webhook`
- **Ngrok URL example:** `https://abc123.ngrok.io/zobot-webhook`

## Configuration

Configure the ngrok URL in Zoho SalesIQ:
- Go to Settings > Bots > Your Bot > Webhook
- Enter: `https://your-ngrok-url.ngrok.io/zobot-webhook`

## Endpoints

- `GET /` - Server status
- `HEAD /zobot-webhook` - Zoho activation check
- `POST /zobot-webhook` - Webhook events