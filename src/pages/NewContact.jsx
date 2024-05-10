import CreateContact from "../func/CreateContact";
import { useState } from "react";
import { auth } from "../firebase";

function NewContact() {
  // Check if user is authenticated; otherwise set to null
  const userEmail = auth.currentUser ? auth.currentUser.email : null;

  const [contactName, setContactName] = useState();
  const [contactNum, setContactNum] = useState();
  const [contactLabel, setContactLabel] = useState();

  <CreateContact
    userEmail={userEmail}
    contactName={contactName}
    contactNum={contactNum}
    contactLabel={contactLabel}
  />;

  return (
    <>
      <div className="flex">
        <div>
          <img
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=200&h=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhdHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="rounded-full w-60 h-60 mt-6 ml-6"
          />
        </div>

        <div className="ml-8 mt-6">
          <form>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add Name
            </label>
            <input
              type="text"
              className="w-full border p-2 rounded-md mb-2"
              placeholder="Name"
              onChange={(e) => setContactName(e.target.value)}
              value={contactName}
              required
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add Number
            </label>
            <input
              type="text"
              className="w-full border p-2 rounded-md mb-2"
              placeholder="Number"
              onChange={(e) => setContactNum(e.target.value)}
              value={contactNum}
              required
            />

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add Label
            </label>
            <input
              type="text"
              className="w-full border p-2 rounded-md mb-2"
              placeholder="Label"
              onChange={(e) => setContactLabel(e.target.value)}
              value={contactLabel}
            />
            <button
              className="bg-lime-600 text-gray-50 px-2 py-2 mt-2 rounded-md"
              onClick={(e) =>
                CreateContact(
                  e,
                  userEmail,
                  contactName,
                  contactNum,
                  contactLabel
                )
              }
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewContact;
