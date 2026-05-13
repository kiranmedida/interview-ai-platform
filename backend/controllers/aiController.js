const axios = require("axios");

const Interview = require("../models/Interview");


// Generate Interview Questions
const generateQuestions = async (req, res) => {

  try {

    const {
      role,
      experience,
      type,
    } = req.body;


    const prompt = `
      Generate 5 interview questions for:

      Role: ${role}

      Experience Level: ${experience}

      Interview Type: ${type}

      Return only questions in numbered format.
    `;


    const response = await axios.post(

      "https://api.groq.com/openai/v1/chat/completions",

      {
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );


    const questions =
      response.data.choices[0].message.content;


    // Save Interview
    await Interview.create({

      user: req.user,

      role,

      experience,

      type,

      questions,
    });


    res.status(200).json({
      questions,
    });

  } catch (error) {

    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: "AI Generation Failed",
    });
  }
};


// Evaluate User Answer
const evaluateAnswer = async (req, res) => {

  try {

    const {
      question,
      answer,
    } = req.body;


    const prompt = `

      You are an AI Interview Evaluator.

      Interview Question:
      ${question}

      Candidate Answer:
      ${answer}

      Evaluate the answer based on:

      1. Communication Skills
      2. Technical Accuracy
      3. Confidence
      4. Suggestions for Improvement

      Give scores out of 10.

      Return clean readable feedback.
    `;


    const response = await axios.post(

      "https://api.groq.com/openai/v1/chat/completions",

      {
        model: "llama-3.3-70b-versatile",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );


    const feedback =
      response.data.choices[0].message.content;


    res.status(200).json({
      feedback,
    });

  } catch (error) {

    console.log(error.response?.data || error.message);

    res.status(500).json({
      message: "AI Evaluation Failed",
    });
  }
};


module.exports = {
  generateQuestions,
  evaluateAnswer,
};