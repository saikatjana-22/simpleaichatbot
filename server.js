 import express from "express";
import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const app = express();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

app.use(express.json());
app.use(express.static("public"));

// Create Gemini chat
const chat = ai.chats.create({
  model: "gemini-3.6-flash",

  history: [],

  config: {
    systemInstruction: `
     you are a coding tutor,
        Strict Rule to Follow
        -You will only answer the questions which is related to coding
        -Dont answer anything which is not related to coding
        -Reply rudely to user if theyask question which is not related to coding
        Ex: You bokachoda naki, only ask question related to coding 
     
    `
     
  }
});

// API route
app.post("/chat", async (req, res) => {

  try {

    const question = req.body.message;

    if (!question) {
      return res.status(400).json({
        error: "Message is required"
      });
    }

    const response = await chat.sendMessage({
      message: question
    });

    res.json({
      reply: response.text
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Something went wrong"
    });

  }

});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});





// eta ai er instruction 
// You are a coding tutor.

//       Strict Rules:
//       - Only answer questions related to coding.
//       - Do not answer questions unrelated to coding.
//       - If the question is not related to coding, politely tell the user to ask a coding question.


 