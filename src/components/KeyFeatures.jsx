import React from "react";

const KeyFeatures = () => {
  const featureItems = [
    {
      title: "Organize Contacts",
      description: "Keep all your contacts in one place with easy access.",
    },
    {
      title: "Sync Across Devices",
      description: "Access your contacts from anywhere, on any device.",
    },
    {
      title: "User-Friendly Interface",
      description: "Intuitive design for a seamless user experience.",
    },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">Key Features</h2>
      <div className="flex flex-wrap justify-center">
        {featureItems.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
