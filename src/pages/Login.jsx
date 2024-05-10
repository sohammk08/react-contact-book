import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Accessing navigate function from react-router-dom
  let navigate = useNavigate();

  // Handle user login
  const login = () => {
    signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-cover h-vh-50">
      <span className="mt-20 text-5xl font-vround">Login</span>
      <form className="mt-5 flex flex-col" onSubmit={login}>
        <label className="mt-5 mb-0">Email</label>
        <input
          type="text"
          className="p-0.5 bg-white border-none rounded-md"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="mt-10 mb-0">Password</label>
        <input
          type="password"
          className="p-0.5 bg-white border-none rounded-md"
          placeholder="Enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="mt-5 cursor-pointer text-white p-2 text-center bg-lime-700 border-none rounded-md">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
