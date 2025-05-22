// backend/services/cohereService.js
const axios = require("axios");

async function summarizeTodos(todos, apiKey) {
  const prompt = `Summarize the following todos in 2–3 concise bullet points:\n- ${todos.join('\n- ')}`;


  const response = await axios.post(
    "https://api.cohere.ai/v1/generate",
    {
      model: "command",
      prompt: prompt,
      max_tokens: 100,
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.generations[0].text;
}

module.exports = { summarizeTodos };
