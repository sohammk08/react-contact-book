import "rsuite/dist/rsuite.min.css";
import Dropdown from "rsuite/Dropdown";
import GearIcon from "@rsuite/icons/Gear";
import { db, auth } from "../firebase";
import { useState, useEffect } from "react";
import UserBadgeIcon from "@rsuite/icons/UserBadge";
import UserInfoIcon from "@rsuite/icons/UserInfo";
import { collection, query, where, getDocs } from "firebase/firestore";

function DropDown() {
  const [username, setUsername] = useState();

  // Fetch user information from Firestore
  useEffect(() => {
    const user = auth.currentUser.email;
    // Create a Firestore query to get user information based on email
    const q = query(collection(db, "users"), where("email", "==", user));
    // Fetch and set the username
    const fetchData = async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUsername(doc.data().username);
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* RSuite Dropdown component */}
      <Dropdown title={username} icon={<UserBadgeIcon />}>
        {/* Dropdown items with icons */}
        <Dropdown.Item icon={<UserInfoIcon />} as="a" href="#">
          Profile
        </Dropdown.Item>
        <Dropdown.Item icon={<GearIcon />} as="a" href="/settings">
          Settings
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default DropDown;
