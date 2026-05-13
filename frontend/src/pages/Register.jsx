import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

import { registerUser } from "../services/authService";


function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

      const data = await registerUser(formData);

      console.log(data);

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert("Registration Failed");

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
            Create Account
          </h1>

          <p className="text-gray-400 text-center mt-3">
            Start your AI interview preparation journey
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
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
              placeholder="password"
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
                  ? "Creating Account..."
                  : "Create Account"
              }
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Register;