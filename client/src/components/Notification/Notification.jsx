import React, { useState, useEffect } from "react";

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const showNotificationFunc = () => {
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    };

    showNotificationFunc();

    const interval = setInterval(() => {
      showNotificationFunc();
    }, 1 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded ${
        showNotification ? "block" : "hidden"
      }`}
    >
      <div className="text-center">
        <div className="">
          <h2> Notification</h2>
          
        </div>
      </div>
    </div>
  );
};

export default Notification;
