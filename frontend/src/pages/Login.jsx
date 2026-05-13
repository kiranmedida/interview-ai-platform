import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import { loginUser } from "../services/authService";


function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const data = await loginUser(formData);

      console.log(data);


      // Store Token
      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );


      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Login Failed");

    } finally {

      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-slate-900">

      <Navbar />

      <div className="flex items-center justify-center px-6 py-16">

        <div className="w-full max-w-md bg-slate-800 p-8 rounded-3xl border border-slate-700">

          <h1 className="text-3xl font-bold text-white text-center">
            Login
          </h1>

          <p className="text-gray-400 text-center mt-3">
            Welcome back to InterviewAI
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                p-4
                rounded-xl
                bg-slate-900
                border
                border-slate-700
                text-white
                outline-none
                focus:border-cyan-400
              "
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="
                w-full
                p-4
                rounded-xl
                bg-slate-900
                border
                border-slate-700
                text-white
                outline-none
                focus:border-cyan-400
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-cyan-500
                hover:bg-cyan-600
                transition
                py-4
                rounded-xl
                font-semibold
              "
            >
              {
                loading
                  ? "Logging In..."
                  : "Login"
              }
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;