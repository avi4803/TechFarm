import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI("AIzaSyDxp9nko9H5QqXwy_hr_dVhZ7lhoSyvY6k");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function About() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false); // State to manage loading status

  // Function to handle sending a message and getting a response from the AI model
  const handleSend = async () => {
    if (userInput.trim()) {
      const userMessage = { sender: 'user', text: userInput };

      // Update chat history with user message
      setChatHistory(prevHistory => [...prevHistory, userMessage]);

      // Clear the input field before sending the message
      setUserInput('');
      setLoading(true);

      try {
        // Send the user's input to the Google Generative AI API
        const prompt = userInput;
        const result = await model.generateContent(prompt);

        // Extract the response from the API
        const botMessage = { sender: 'bot', text: result.response.text() };

        // Update chat history with the bot's response
        setChatHistory(prevHistory => [...prevHistory, botMessage]);
      } catch (error) {
        console.error('Error communicating with Google Generative AI:', error);
      } finally {
        // Ensure loading state is reset
        setLoading(false);
      }
    }
  };

  return (
    <>
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 rounded-2xl">
        <div className='flex flex-row items-center'>
        <img src='src/assets/Chat-bot.png' className='h-20 w-26'></img>
        <h1 className='text-black text-5xl font-bold'>Farmbot</h1>
        </div>
     
    <h1 className='text-slate-400 font-thin p-1'>Your personal AI bot for Farming</h1>
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl">
        <div className="p-6 h-96 overflow-y-auto border-b border-gray-300">
          {chatHistory.map((message, index) => (
            <div key={index} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                {message.text}
              </div>
            </div>
          ))}
          {loading && <div className="text-center text-gray-500">...</div>} {/* Optional loading indicator */}
        </div>
        <div className="p-4 flex">
          <input
            type="text"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            onClick={handleSend}
            disabled={loading} // Disable the button while loading
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
