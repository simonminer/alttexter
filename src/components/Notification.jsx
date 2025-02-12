import React from "react";

const Notification = ({ message, type }) => {
  if (!message) return null;

  return (
    <p className={`p-2 my-2 rounded ${type === "success" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
      {message}
    </p>
  );
};

export default Notification;

