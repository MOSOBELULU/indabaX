import { Link } from "react-router-dom";

export default function RegisterButton() {
    return(
        <>
        <Link to="/register">
            <button className="text-xl md:text-2xl font-bold px-10 py-4 rounded-2xl shadow-2xl
              bg-white
              text-black
              transition-all duration-300 ease-in-out transform hover:scale-110">
              Register
            </button>
          </Link>
        </>
    )
}