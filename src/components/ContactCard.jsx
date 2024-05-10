import React, { useState } from "react";
import CopyIcon from "@rsuite/icons/Copy";
import EditIcon from "@rsuite/icons/Edit";
import TrashIcon from "@rsuite/icons/Trash";
import ShareOutlineIcon from "@rsuite/icons/ShareOutline";
import { IconButton } from "rsuite";

function ContactCard({ imageUrl, name, number }) {
  const [showModal, setShowModal] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="w-44 py-1 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Contact card */}
      <div className="flex items-center justify-center">
        <img
          className="h-24 mt-2 object-center rounded-full"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="px-4 pb-4">
        <div className="font-bold text-xl text-center">{name}</div>
        <p className="text-gray-700 text-base text-center">{number}</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={toggleModal}
            className="text-blue-500 underline cursor-pointer"
          >
            <span className="ml-1">see modal</span>
          </button>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="flex bg-white p-8 rounded-lg">
            {/* Contact image */}
            <img
              className="h-24 mt-2 object-center rounded-full"
              src={imageUrl}
              alt=""
            />
            {/* Contact information */}
            <div className="my-auto ml-2">
              <div>{name}</div>
              <div>{number}</div>
              <div className="flex space-x-3 -mb-14 mt-4">
                <IconButton icon={<CopyIcon />} />
                <IconButton icon={<EditIcon />} />
                <IconButton icon={<ShareOutlineIcon />} />
                <IconButton icon={<TrashIcon />} />
              </div>
            </div>
            <button
              onClick={toggleModal}
              className="h-7 w-7 -mt-5 -mr-5 bg-red-500 hover:bg-red-600 text-white px-2 rounded-lg"
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactCard;
