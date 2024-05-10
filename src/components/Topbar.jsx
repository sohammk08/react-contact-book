import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import DropDown from "./DropDown";

function Topbar() {
  const [userState, setUserState] = useState(false);

  useEffect(() => {
    // Check the authentication state. If the user is signed in, update the user state.
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUserState(true);
        } else {
          setUserState(false);
        }
      },
      (error) => {
        console.error("Authentication state change error: ", error);
      }
    );

    return () => unsubscribe(); // Cleanup the subscription when the component unmounts
  }, []);

  // Signout function
  const signUserOut = () => {
    signOut(auth);
    window.location.reload(false);
  };

  return (
    <div className="w-full h-12 bg-white sticky top-0 flex justify-center font-jsans">
      <div className="items-center justify-center">
        <h2 className="text-black text-lg font-vround ml-4 mt-2">
          React Phonebook
        </h2>
      </div>

      <div className="flex items-center justify-right ml-auto">
        <ul className="flex justify-center list-none m-0 p-0">
          <li className="mr-5 text-lg font-light cursor-pointer">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>

          {userState && (
            <>
              <li className="mr-5 text-lg font-light cursor-pointer">
                <Link className="link" to="/archive">
                  ARCHIVE
                </Link>
              </li>

              <li className="mr-5 text-lg font-light cursor-pointer">
                <Link className="link" to="/bin">
                  BIN
                </Link>
              </li>

              <li className="mr-5 text-lg font-light cursor-pointer">
                <Link className="link" to="/newcontact">
                  New +
                </Link>
              </li>
            </>
          )}

          <li
            className="mr-5 text-lg font-light cursor-pointer"
            onClick={signUserOut}
          >
            {userState && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-right ml-auto">
        {userState ? (
          <DropDown />
        ) : (
          <ul className="flex justify-center list-none m-0 p-0">
            <li className="mr-5 text-lg font-light cursor-pointer">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="mr-5 text-lg font-light cursor-pointer">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Topbar;
