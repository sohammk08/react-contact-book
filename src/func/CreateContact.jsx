import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const CreateContact = async (
  e,
  userEmail,
  contactName,
  contactNum,
  contactLabel
) => {
  e.preventDefault();
  if (userEmail) {
    // If user is authenticated, add a new entry to "contacts"
    await addDoc(collection(db, "contacts"), {
      user_email: userEmail,
      contact_name: contactName,
      contact_number: contactNum,
      contact_label: contactLabel,
      upload_time: serverTimestamp(),
    });
    alert("Contact Saved Successfully!");
  } else {
    // If user is not authenticated or some other error occurs, show error
    alert(
      "There was some error while saving contact. Please try again or contact admin."
    );
  }
};

export default CreateContact;
