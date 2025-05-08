import React, { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const hardcodedResponses = {
    "How do I sell my license?":
      "To sell your license, upload it to our platform. We’ll evaluate and pay you!",
    "What is SoftSell?":
      "SoftSell is a secure platform for reselling unused software licenses.",
    "How fast do I get paid?":
      "We pay within 24 hours after a successful valuation and verification.",
  };

  const handleSendMessage = () => {
    if (!inputMessage) return;
    setMessages([...messages, { user: inputMessage }]);
    const response =
      hardcodedResponses[inputMessage] || "I'm not sure about that yet!";
    setMessages((prev) => [...prev, { bot: response }]);
    setInputMessage("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Glowing, Animated Chat Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shadow-[0_0_20px_rgba(255,0,100,0.6)] animate-pulse hover:scale-105 transition-transform duration-300"
        title="Open Chat"
      >
        <span className="text-white text-2xl">💬</span>
        <span className="absolute inset-0 rounded-full border border-white opacity-20 animate-ping"></span>
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="mt-4 w-80 h-96 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-md border border-gray-300 dark:border-gray-700">
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.user ? "text-right" : "text-left"}>
                <div
                  className={`inline-block max-w-[70%] p-2 rounded-lg dark:text-white ${
                    msg.user
                      ? "bg-blue-200 dark:bg-blue-600"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                >
                  {msg.user || msg.bot}
                </div>
              </div>
            ))}
          </div>
          <div className="flex p-4 border-t dark:border-gray-700">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg mr-2"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
