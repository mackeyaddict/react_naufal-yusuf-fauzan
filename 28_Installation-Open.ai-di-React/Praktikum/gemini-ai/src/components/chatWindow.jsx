import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import InputBox from "./inputBox";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const Header = () => {
  return (
    <div className="container mx-auto text-white py-4">
      <h1 className="text-center font-bold text-3xl">
        Naufal's ChatBot with Gemini Pro
      </h1>
      <p className="text-center font-thin text-lg">Ask Me Anything You Want</p>
    </div>
  );
};

export default function ChatWindow() {
  const chatContainerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Auto-scroll to the bottom of the chat container when new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const sendMessage = async (inputText) => {
    if (!inputText) {
      return;
    }

    // Update messages with the user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: inputText, sender: "user", timestamp: new Date() },
    ]);

    setLoading(true);

    try {
      const result = await model.generateContent(inputText);
      const text = result.response.text();

      // Check if the response is code before updating messages
      const isCode = text.includes("```");

      // Update messages with the AI response
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: text,
          sender: "ai",
          timestamp: new Date(),
          isCode, 
        },
      ]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("generateContent error: ", error);
    }
  };

  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-between">
      <Header />
      <div
        className="container mx-auto flex-grow overflow-y-auto"
        ref={chatContainerRef}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === "user"
                ? "self-end bg-gray-300 text-black"
                : "self-start bg-gray-700 text-white"
            } p-3 mb-4 rounded-lg border border-gray-600`}
          >
            {message.isCode ? (
              <pre className="whitespace-pre-wrap">{message.text}</pre>
            ) : (
              <>
                <p className="message-text">{message.text}</p>
                <span
                  className={`time ${
                    message.sender === "user" ? "text-black" : "text-white"
                  } text-xs`}
                >
                  {message.timestamp
                    ? dayjs(message.timestamp).format("DD MMMM YYYY")
                    : ""}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
      <InputBox sendMessage={sendMessage} loading={loading} />
    </div>
  );
}

