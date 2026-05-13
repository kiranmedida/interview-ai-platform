import { Link } from "react-router-dom";

import PrimaryButton from "../components/PrimaryButton";
import Navbar from "../components/Navbar";


function Home() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );


  return (

    <div className="min-h-screen bg-slate-900 text-white">

      {/* Navbar */}
      <Navbar />


      {/* Hero Section */}
      <section className="px-6 py-16 md:px-12 md:py-24">

        <div className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-14
          items-center
        ">

          {/* Left Content */}
          <div>

            <p className="text-cyan-400 font-semibold mb-4">
              AI Powered Interview Preparation
            </p>


            <h1 className="
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
            ">
              Master Interviews With Smart AI Feedback
            </h1>


            <p className="
              mt-6
              text-gray-300
              text-lg
              leading-relaxed
            ">
              Practice technical and HR interviews with
              AI-generated questions, instant evaluation,
              and personalized improvement suggestions.
            </p>


            {/* User Welcome */}
            {
              user && (

                <div className="
                  mt-8
                  bg-slate-800
                  border
                  border-slate-700
                  p-5
                  rounded-2xl
                  max-w-md
                ">

                  <h2 className="
                    text-2xl
                    font-bold
                    text-cyan-400
                  ">
                    Welcome Back 👋
                  </h2>

                  <p className="
                    mt-3
                    text-lg
                    text-gray-300
                  ">
                    {user.name}
                  </p>

                  <p className="text-gray-500">
                    {user.email}
                  </p>

                </div>
              )
            }


            {/* Buttons */}
            <div className="
              mt-10
              flex
              flex-col
              sm:flex-row
              gap-4
            ">

              <Link to="/dashboard">

                <PrimaryButton text="Start Interview" />

              </Link>


              <Link
                to="/history"
                className="
                  border
                  border-cyan-400
                  hover:bg-cyan-400
                  hover:text-black
                  transition
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  text-lg
                  text-center
                "
              >
                View History
              </Link>

            </div>

          </div>


          {/* Right Content */}
          <div className="flex justify-center">

            <div className="
              w-full
              max-w-md
              bg-slate-800/70
              backdrop-blur-lg
              border
              border-slate-700
              rounded-3xl
              p-8
              shadow-2xl
            ">

              <div className="
                flex
                items-center
                justify-between
                mb-6
              ">

                <h2 className="text-2xl font-bold">
                  AI Feedback
                </h2>

                <span className="
                  bg-green-500/20
                  text-green-400
                  px-3
                  py-1
                  rounded-full
                  text-sm
                ">
                  Live
                </span>

              </div>


              <div className="space-y-5">

                <div className="
                  bg-slate-900
                  p-4
                  rounded-xl
                ">

                  <p className="text-sm text-gray-400">
                    Technical Score
                  </p>

                  <h3 className="
                    text-3xl
                    font-bold
                    text-cyan-400
                    mt-2
                  ">
                    8.5/10
                  </h3>

                </div>


                <div className="
                  bg-slate-900
                  p-4
                  rounded-xl
                ">

                  <p className="
                    text-sm
                    text-gray-400
                    mb-2
                  ">
                    AI Suggestion
                  </p>

                  <p className="text-gray-200">
                    Improve explanation clarity and include
                    real-world React examples.
                  </p>

                </div>


                <div className="
                  bg-slate-900
                  p-4
                  rounded-xl
                ">

                  <p className="
                    text-sm
                    text-gray-400
                    mb-2
                  ">
                    Communication
                  </p>

                  <div className="
                    w-full
                    bg-slate-700
                    rounded-full
                    h-3
                  ">

                    <div className="
                      bg-cyan-400
                      h-3
                      rounded-full
                      w-[80%]
                    "></div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;