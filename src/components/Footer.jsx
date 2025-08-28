import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() === "") return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000); // reset after 3s for demo
  };

  return (
    <div className="flex flex-col py-20 space-y-5 text-center items-center">
      <h2 className="text-4xl md:text-7xl font-serif">
        Sign Up To Our <br /> Newsletter!
      </h2>
      <div className="w-full flex justify-center md:w-1/2">
        <div className="relative w-[90%] md:w-full border rounded-full flex">
          <input
            type="text"
            placeholder="Your Email..."
            className="w-full p-5 rounded-full outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            className="absolute bg-red-600 px-7 py-4 mt-1 rounded-full
              font-serif text-xl pb-3 right-1 hover:bg-red-700 transition"
          >
            Subscribe
          </button>
        </div>
      </div>
      {subscribed && (
        <p className="text-green-600 mt-4 text-lg font-medium">
          ✅ Thanks for subscribing!
        </p>
      )}
    </div>
  );
};

export default Footer;
