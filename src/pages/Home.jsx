import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link } from "react-router-dom";
import KeyFeatures from "../components/KeyFeatures";
import ContactCard from "../components/ContactCard";

function Home() {
  const [userState, setUserState] = useState(false);

  // useEffect to manage auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserState(!!user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="mt-10">
      {userState ? (
        <ContactCard
          imageUrl="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHx8MA%3D%3D"
          name="Jake Riley"
          number="+91 9376105851"
        />
      ) : (
        <div className="bg-gray-100 min-h-screen">
          <header className="bg-blue-500 text-white text-center py-8">
            <h1 className="text-4xl font-bold">Contact Book</h1>
            <p className="mt-2">Manage your contacts with ease!</p>
          </header>

          <KeyFeatures />

          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Sign Up Today
            </h2>
            <form className="flex flex-col items-center">
              <Link to="/register">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full mt-4">
                  Get Started
                </button>
              </Link>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
