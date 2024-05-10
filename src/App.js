import Bin from "./pages/Bin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Archive from "./pages/Archive";
import ErrorPage from "./pages/ErrorPage";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebase";
import NewContact from "./pages/NewContact";

function App() {
  const [userState, setUserState] = useState(false);
  onAuthStateChanged(auth, (userState) => {
    if (userState) {
      setUserState(true);
    } else {
      console.log("No user logged in!");
    }
  });

  return (
    <>
      {/* Set up the React Router with BrowserRouter */}
      <Router>
        <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/archive"
            element={userState ? <Archive /> : <Register />}
          />
          <Route path="/bin" element={userState ? <Bin /> : <Register />} />
          <Route
            path="/newcontact"
            element={userState ? <NewContact /> : <Register />}
          />
          <Route
            path="/settings"
            element={userState ? <Settings /> : <Register />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
