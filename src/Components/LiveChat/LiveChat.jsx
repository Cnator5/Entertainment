'use client';

import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import { FaComments, FaPaperPlane, FaTimes, FaUser } from 'react-icons/fa';
import './LiveChat.module.css';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [isAgent, setIsAgent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const showInitialPopup = () => {
      setShowPopup(true);
    };

    const popupTimer = setTimeout(showInitialPopup, 5000); // Show popup after 5 seconds

    return () => clearTimeout(popupTimer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const newSocket = io('http://localhost:3001');
      setSocket(newSocket);

      if (!sessionId) {
        const newSessionId = uuidv4();
        setSessionId(newSessionId);
        newSocket.emit('startChat', newSessionId);
      }

      return () => newSocket.close();
    }
  }, [isOpen]);

  useEffect(() => {
    if (socket) {
      socket.on('chatHistory', (history) => {
        setMessages(history);
      });

      socket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() && socket) {
      socket.emit('sendMessage', { sessionId, message: inputMessage, isHuman: isAgent });
      setInputMessage('');
    }
  };

  const toggleAgentMode = () => {
    setIsAgent(!isAgent);
    if (!isAgent && socket) {
      socket.emit('agentJoin', sessionId);
    }
  };

  const handleAccept = () => {
    setShowPopup(false);
    setIsOpen(true);
  };

  const handleDecline = () => {
    setShowPopup(false);
    const popupTimer = setTimeout(() => setShowPopup(true), 60000); // Show popup again after 1 minute
    return () => clearTimeout(popupTimer);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 livechat-container sm:w-96">
      {showPopup && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-4 max-w-sm">
          <h3 className="font-bold mb-2">Hello! I'm your support assistant.</h3>
          <p className="mb-4">Would you like to chat with our support team?</p>
          <div className="flex justify-end">
            <button
              onClick={handleDecline}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-400 transition-colors"
            >
              No, thanks
            </button>
            <button
              onClick={handleAccept}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Yes, please
            </button>
          </div>
        </div>
      )}
      {!isOpen && !showPopup && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition-colors"
        >
          <FaComments size={24} />
        </button>
      )}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-full h-[32rem] flex flex-col">
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-bold">Live Chat Support</h3>
            <div>
              <button onClick={toggleAgentMode} className="text-white hover:text-gray-200 mr-2">
                <FaUser size={20} color={isAgent ? 'yellow' : 'white'} />
              </button>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                <FaTimes size={20} />
              </button>
            </div>
          </div>
          <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  message.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : message.sender === 'human'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors"
              >
                <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveChat;