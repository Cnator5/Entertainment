require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

mongoose.connect('mongodb://localhost/livechat', { useNewUrlParser: true, useUnifiedTopology: true });

const ChatSchema = new mongoose.Schema({
  sessionId: String,
  messages: [{ sender: String, text: String, timestamp: Date }]
});

const Chat = mongoose.model('Chat', ChatSchema);

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('startChat', async (sessionId) => {
    let chat = await Chat.findOne({ sessionId });
    if (!chat) {
      chat = new Chat({ sessionId, messages: [] });
      await chat.save();
    }
    socket.join(sessionId);
    socket.emit('chatHistory', chat.messages);
  });

  socket.on('sendMessage', async (data) => {
    const { sessionId, message, isHuman } = data;
    let chat = await Chat.findOne({ sessionId });
    chat.messages.push({ sender: isHuman ? 'human' : 'user', text: message, timestamp: new Date() });
    await chat.save();

    if (!isHuman) {
      try {
        const gptResponse = await openai.createCompletion({
          model: "text-davinci-002",
          prompt: `Customer: ${message}\nAI Assistant:`,
          max_tokens: 150
        });

        const aiMessage = gptResponse.data.choices[0].text.trim();
        chat.messages.push({ sender: 'ai', text: aiMessage, timestamp: new Date() });
        await chat.save();

        io.to(sessionId).emit('message', { sender: 'ai', text: aiMessage });
      } catch (error) {
        console.error('Error generating AI response:', error);
        io.to(sessionId).emit('message', { sender: 'ai', text: "I'm sorry, I'm having trouble understanding. Let me connect you with a human agent." });
      }
    }

    io.to(sessionId).emit('message', { sender: isHuman ? 'human' : 'user', text: message });
  });

  socket.on('agentJoin', (sessionId) => {
    socket.join(sessionId);
    io.to(sessionId).emit('message', { sender: 'system', text: 'A support agent has joined the chat.' });
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

