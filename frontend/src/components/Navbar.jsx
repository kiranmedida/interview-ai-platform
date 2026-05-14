import { Link, useNavigate } from "react-router-dom";


function Navbar() {

  const navigate = useNavigate();

  const token = localStorage.getItem("token");


  const logoutUser = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");
  };


  return (

    <nav className="
      bg-slate-900
      border-b
      border-slate-800
      px-8
      py-4
      flex
      justify-between
      items-center
    ">

      {/* Left Section */}
      <div className="flex items-center gap-8">

        <Link
          to="/"
          className="
            text-2xl
            font-bold
            text-cyan-400
          "
        >
          InterviewAI
        </Link>


        {
          token && (
            <>

              <Link
                to="/"
                className="
                  text-gray-300
                  hover:text-cyan-400
                  transition
                "
              >
                Home
              </Link>


              <Link
                to="/dashboard"
                className="
                  text-gray-300
                  hover:text-cyan-400
                  transition
                "
              >
                Dashboard
              </Link>


              <Link
                to="/history"
                className="
                  text-gray-300
                  hover:text-cyan-400
                  transition
                "
              >
                History
              </Link>

            </>
          )
        }

      </div>


      {/* Right Section */}
      <div className="flex items-center gap-4">

        {
          token ? (

            <button
              onClick={logoutUser}
              className="
                bg-red-500
                hover:bg-red-600
                transition
                px-5
                py-2
                rounded-lg
                font-medium
              "
            >
              Logout
            </button>

          ) : (

            <>

              <Link
                to="/login"
                className="
                  text-gray-300
                  hover:text-cyan-400
                  transition
                  font-medium
                "
              >
                Login
              </Link>


              <Link
                to="/register"
                className="
                  bg-cyan-500
                  hover:bg-cyan-600
                  transition
                  px-5
                  py-2
                  rounded-lg
                  font-medium
                "
              >
                Register
              </Link>

            </>
          )
        }

      </div>

    </nav>
  );
}

export default Navbar;