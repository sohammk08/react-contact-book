import { useState } from "react";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Accessing navigate function
  let navigate = useNavigate();

  // Registering user and saving username in db
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      // Add user's username and email to the db collection
      await addDoc(collection(db, "users"), {
        email: email,
        username: username,
      });
      navigate("/"); // Redirect after successful registration
    } catch (err) {
      alert("Error!", err); // Display message in case of an error
    }
  };

  return (
    <div className="mt-20 bg-cover flex flex-col items-center justify-center">
      <span className="font-vround text-5xl">Register</span>
      <form className="mt-5 flex flex-col" onSubmit={registerUser}>
        <label className="mt-2 mb-0">Username</label>
        <input
          type="text"
          className="rounded-md p-0.5 bg-white border-none"
          placeholder="Enter your username"
          required
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label className="mt-10 mb-0">Email</label>
        <input
          type="text"
          className="rounded-md p-0.5 bg-white border-none"
          placeholder="Enter your email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label className="mt-10 mb-0">Password</label>
        <input
          type="password"
          className="rounded-md p-0.5 bg-white border-none"
          placeholder="Enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="rounded-md mt-5 cursor-pointer bg-lime-700 text-white p-2 text-center border-none">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
