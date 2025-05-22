## 📘 Todo Summary Assistant

A full-stack app to manage personal todos, summarize them using **Cohere AI**, and send the summary to a **Slack channel** via webhooks.

---

## 🧱 Tech Stack

| Layer     | Tech                                             |
| --------- | ------------------------------------------------ |
| Frontend  | React, Bootstrap                                 |
| Backend   | Node.js, Express.js                              |
| Database  | Firebase Firestore                               |
| LLM API   | Cohere                                           |
| Messaging | Slack Webhook                                    |
| Hosting   | Vercel (frontend), Render (backend) *(optional)* |

---

## 🚀 Features

* Create, view, and delete todos
* Click a button to generate a **natural-language summary**
* Automatically post the summary to Slack
* Environment-configured and API-driven architecture

---

## 🛠 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/atharva-narkhede/todo-summary-assistant.git
cd todo-summary-assistant
```

---

### 2. Backend Setup (`/backend`)

#### Install Dependencies:

```bash
cd backend
npm install
```

#### Environment Variables:

Create a `.env` file in `backend/`:

```env
COHERE_API_KEY=your-cohere-key
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/...

# Optional: If using service account via env (not needed if using serviceAccountKey.json)
# FIREBASE_PROJECT_ID=...
# FIREBASE_CLIENT_EMAIL=...
# FIREBASE_PRIVATE_KEY=...
```

Ensure `firebase/serviceAccountKey.json` contains your Firebase Admin credentials.

#### Start Server:

```bash
node server.js
```

---

### 3. Frontend Setup (`/frontend`)

#### Install Dependencies:

```bash
cd frontend
npm install
```

#### Environment Variables:

Create a `.env` file in `frontend/`:

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

#### Start Frontend:

```bash
npm start
```

---

## 🧠 LLM Integration (Cohere)

* Go to [Cohere Dashboard](https://dashboard.cohere.com/)
* Get your **API key**
* Add it to `COHERE_API_KEY` in backend `.env`

---

## 💬 Slack Webhook Setup

1. Go to [https://api.slack.com/apps](https://api.slack.com/apps)
2. Create an app → enable **Incoming Webhooks**
3. Choose a channel and generate a webhook URL
4. Paste it in `.env` as `SLACK_WEBHOOK_URL`

---

## 🌐 CORS Setup (Important)

In `backend/server.js`, make sure to allow frontend access:

```js
app.use(cors({
  origin: "http://localhost:3000", // or your deployed frontend URL
  credentials: true
}));
```


---

## 📸 Screenshots



---

## ✍️ Author

* [Atharva Narkhede](https://github.com/atharva-narkhede)

