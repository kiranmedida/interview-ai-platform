import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";


function History() {

  const [interviews, setInterviews] = useState([]);


  useEffect(() => {

    fetchHistory();

  }, []);


  const fetchHistory = async () => {

    try {

      const token = localStorage.getItem("token");


      const response = await axios.get(

        `${import.meta.env.VITE_API_URL}/api/interview/history`,

        {
          headers: {
            Authorization: token,
          },
        }
      );


      setInterviews(response.data);

    } catch (error) {

      console.log(error);
    }
  };


  return (

    <div className="min-h-screen bg-slate-900 text-white">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-4xl font-bold">
          Interview History
        </h1>

        <p className="text-gray-400 mt-3">
          View all your previous interviews
        </p>


        <div className="mt-10 space-y-6">

          {
            interviews.length === 0 ? (

              <p className="text-gray-400">
                No interview history found
              </p>

            ) : (

              interviews.map((item) => (

                <div
                  key={item._id}
                  className="
                    bg-slate-800
                    border
                    border-slate-700
                    p-6
                    rounded-2xl
                  "
                >

                  <h2 className="text-2xl font-bold text-cyan-400">
                    {item.role}
                  </h2>

                  <p className="mt-2 text-gray-300">
                    Experience: {item.experience}
                  </p>

                  <p className="text-gray-300">
                    Type: {item.type}
                  </p>

                  <p className="text-gray-400 mt-4 whitespace-pre-line">
                    {item.questions}
                  </p>

                </div>
              ))
            )
          }

        </div>

      </div>

    </div>
  );
}

export default History;