import { useState } from "react";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, "users"), {
        email: email,
        username: username,
      });
      navigate("/");
    } catch (err) {
      alert("Error!", err);
    }
  };

  return (
    <div className="mt-16 bg-cover flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h3 className="font-bold text-4xl text-center">Register</h3>
        <form className="mt-10 flex flex-col space-y-2" onSubmit={registerUser}>
          <label className="text-sm font-medium">Username</label>
          <input
            type="text"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your username"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label className="text-sm font-medium">Email</label>
          <input
            type="text"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            className="rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
