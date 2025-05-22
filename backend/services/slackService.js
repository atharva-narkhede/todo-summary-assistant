// backend/services/slackService.js
const axios = require("axios");

async function sendToSlack(summary, webhookUrl) {
  await axios.post(webhookUrl, {
    text: `📝 *Todo Summary:*\n${summary}`,
  });
}

module.exports = { sendToSlack };
