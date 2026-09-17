# 🤖 AI Chatbot using Node.js & Gemini

A simple AI chatbot built using **Node.js, Express.js, JavaScript, and Google's Gemini API**.

This project demonstrates how to create a backend server, connect it with the Gemini AI API, and build a simple web-based chatbot interface.

## 🚀 Features

* 💬 Chat with an AI assistant
* 🤖 Gemini API integration
* ⚡ Node.js backend
* 🌐 Express.js server
* 📡 Frontend-backend communication using `fetch()`
* 🔐 API key stored securely using environment variables
* 🖥️ Simple and responsive chatbot interface
* 📁 Organized project structure

## 🛠️ Technologies Used

* **HTML**
* **CSS**
* **JavaScript**
* **Node.js**
* **Express.js**
* **Google Gemini API**
* **@google/genai**
* **Git & GitHub**

## 📂 Project Structure

```text
lecture3chatbot/
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/lecture3chatbot.git
```

### 2. Go inside the project

```bash
cd lecture3chatbot
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the project root:

```env
GEMINI_API_KEY=your_api_key_here
```

> Never share your API key or upload your `.env` file to GitHub.

### 5. Start the server

```bash
node server.js
```

The application will run on:

```text
http://localhost:3000
```

Open the URL in your browser.

## 🔄 How It Works

The application follows this flow:

```text
User
  ↓
Chatbot UI
  ↓
script.js
  ↓
fetch("/chat")
  ↓
Express.js Server
  ↓
Gemini API
  ↓
AI Response
  ↓
Express.js
  ↓
Chatbot UI
```

### Frontend

The user enters a question in the chatbot interface.

JavaScript sends the question to the backend using:

```javascript
fetch("/chat", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        message: question
    })
});
```

### Backend

The Express.js server receives the user's message and sends it to the Gemini API.

The generated AI response is then returned to the frontend and displayed in the chatbot.

## 🔐 Environment Variables

This project uses an environment variable for the Gemini API key.

Example:

```env
GEMINI_API_KEY=your_api_key_here
```

The `.env` file should be included in `.gitignore`:

```text
node_modules/
.env
```

## 📸 Screenshots

Add screenshots of your chatbot here after completing the UI.

Example:

```markdown
![Chatbot Screenshot](./screenshots/chatbot.png)
```

## 📚 What I Learned

Through this project, I learned:

* How Node.js works as a backend runtime
* How to create an Express.js server
* How frontend and backend communicate
* How the `fetch()` API works
* How to create POST API endpoints
* How to use environment variables
* How to integrate the Gemini API
* How to work with asynchronous JavaScript
* How to use Git and GitHub for version control

## 🔮 Future Improvements

* Add chat history
* Add user authentication
* Add database integration
* Improve chatbot UI
* Add Markdown response support
* Add typing animation
* Add conversation memory
* Deploy the application online

## 👨‍💻 Author

**Saikat Jana**

B.Tech Information Technology Student

---

⭐ If you find this project useful, feel free to star the repository!
