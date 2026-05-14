import { useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";


function Dashboard() {

  const [formData, setFormData] = useState({
    role: "",
    experience: "",
    type: "",
  });

  const [questions, setQuestions] = useState("");

  const [answer, setAnswer] = useState("");

  const [feedback, setFeedback] = useState("");

  const [evaluating, setEvaluating] = useState(false);

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const generateQuestions = async () => {

    try {

      setLoading(true);

      const token = localStorage.getItem("token");


      const response = await axios.post(

        `${import.meta.env.VITE_API_URL}/api/ai/generate`,

        formData,

        {
          headers: {
            Authorization: token,
          },
        }
      );

      setQuestions(response.data.questions);

      setFeedback("");

      setAnswer("");

    } catch (error) {

      console.log(error);

      alert("Failed To Generate Questions");

    } finally {

      setLoading(false);
    }
  };


  const evaluateAnswer = async () => {

    try {

      setEvaluating(true);

      const token = localStorage.getItem("token");


      const response = await axios.post(

        `${import.meta.env.VITE_API_URL}/api/ai/evaluate`,

        {
          question: questions,
          answer,
        },

        {
          headers: {
            Authorization: token,
          },
        }
      );


      setFeedback(response.data.feedback);

    } catch (error) {

      console.log(error);

      alert("Failed To Evaluate Answer");

    } finally {

      setEvaluating(false);
    }
  };


  return (

    <div className="min-h-screen bg-slate-900 text-white">

      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold">
          AI Interview Generator
        </h1>

        <p className="text-gray-400 mt-3">
          Generate AI-powered interview questions instantly
        </p>


        <div className="
          mt-10
          grid
          grid-cols-1
          md:grid-cols-3
          gap-5
        ">

          <input
            type="text"
            name="role"
            placeholder="Frontend Developer"
            value={formData.role}
            onChange={handleChange}
            className="
              p-4
              rounded-xl
              bg-slate-800
              border
              border-slate-700
              outline-none
              focus:border-cyan-400
            "
          />


          <input
            type="text"
            name="experience"
            placeholder="Fresher"
            value={formData.experience}
            onChange={handleChange}
            className="
              p-4
              rounded-xl
              bg-slate-800
              border
              border-slate-700
              outline-none
              focus:border-cyan-400
            "
          />


          <input
            type="text"
            name="type"
            placeholder="Technical"
            value={formData.type}
            onChange={handleChange}
            className="
              p-4
              rounded-xl
              bg-slate-800
              border
              border-slate-700
              outline-none
              focus:border-cyan-400
            "
          />

        </div>


        <button
          onClick={generateQuestions}
          disabled={loading}
          className="
            mt-8
            bg-cyan-500
            hover:bg-cyan-600
            transition
            px-8
            py-4
            rounded-xl
            font-semibold
          "
        >

          {
            loading
              ? "Generating..."
              : "Generate Questions"
          }

        </button>


        {
          questions && (

            <div className="
              mt-10
              bg-slate-800
              p-8
              rounded-3xl
              border
              border-slate-700
              whitespace-pre-line
            ">

              <h2 className="text-2xl font-bold mb-5">
                Generated Questions
              </h2>

              <p className="text-gray-300 leading-8">
                {questions}
              </p>


              {/* Answer Box */}
              <div className="mt-8">

                <h2 className="text-2xl font-bold mb-4">
                  Your Answer
                </h2>

                <textarea
                  rows="8"
                  placeholder="Write your answer here..."
                  value={answer}
                  onChange={(e) =>
                    setAnswer(e.target.value)
                  }
                  className="
                    w-full
                    p-4
                    rounded-2xl
                    bg-slate-900
                    border
                    border-slate-700
                    outline-none
                    focus:border-cyan-400
                  "
                />

              </div>


              {/* Evaluate Button */}
              <button
                onClick={evaluateAnswer}
                disabled={evaluating}
                className="
                  mt-6
                  bg-green-500
                  hover:bg-green-600
                  transition
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                "
              >

                {
                  evaluating
                    ? "Evaluating..."
                    : "Evaluate Answer"
                }

              </button>


              {/* AI Feedback */}
              {
                feedback && (

                  <div className="
                    mt-8
                    bg-slate-900
                    border
                    border-slate-700
                    p-6
                    rounded-2xl
                  ">

                    <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                      AI Feedback
                    </h2>

                    <p className="text-gray-300 whitespace-pre-line leading-8">
                      {feedback}
                    </p>

                  </div>
                )
              }

            </div>
          )
        }

      </div>

    </div>
  );
}

export default Dashboard;