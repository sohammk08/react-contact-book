import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Navigate function to navigate user after login
  let navigate = useNavigate();

  // Function to handle login
  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      alert("Error: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h3 className="text-4xl font-bold text-center">Login</h3>
        <form className="mt-10 flex flex-col space-y-2" onSubmit={login}>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="text"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
