import profileImage from "./assets/profile.jpg";
import React, { useState } from "react";
const ProfileCard = ({ name, role, image, messageSent, onSendMessage }) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-8 shadow-sm sm:flex-row sm:items-center sm:gap-6 sm:py-6">
      <img
        src={image}
        alt={`Portrait de ${name}`}
        className="mx-auto block h-24 w-24 shrink-0 rounded-full object-cover sm:mx-0"
      />

      <div className="space-y-2 text-center sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg font-semibold text-black">{name}</p>
          <p className="font-medium text-gray-500">{role}</p>
        </div>

        <button
          type="button"
          className="rounded-md border border-purple-200 px-3 py-1 text-purple-600 transition hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"
          onClick={onSendMessage}
        >
          {messageSent ? "Message envoyé !" : "Envoyer un message"}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [messageSent, setMessageSent] = useState(false);

  return (
    <ProfileCard
      name="Mondesir Ndinga"
      role="Développeur Web Full Stack"
      image={profileImage}
      messageSent={messageSent}
      onSendMessage={() => setMessageSent(true)}
    />
  );
};

export default App;
