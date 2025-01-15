import React, { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script");
    script.src = "https://app.livechatai.com/embed.js";
    script.setAttribute("data-id", "cm5iivd32000xm50amp9kq24r");
    script.async = true;
    script.defer = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup: Remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // The chatbot script doesn't require UI changes
};

export default ChatBot;
