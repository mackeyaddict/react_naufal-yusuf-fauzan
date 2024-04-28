import { useState } from "react";

const InputBox = ({ sendMessage, loading }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container mx-auto pb-4 flex justify-between items-center border-t border-gray-600 pt-4">
      {loading && (
        <div className="w-10 h-10 mr-4">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-8 w-8"></div>
        </div>
      )}
      <input
        disabled={loading}
        type="text"
        className="flex-grow px-4 py-2 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Type a message..."
        value={loading ? "Loading..." : input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="ml-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-500">
        Send
      </button>
    </form>
  );
};

export default InputBox;
