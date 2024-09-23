// chatbot.js

document.addEventListener("DOMContentLoaded", function () {
    const chatHeader = document.querySelector('.chatbot-header');
    const chatBody = document.querySelector('.chatbot-body');
    const sendBtn = document.querySelector('.chatbot-send');
    const messageInput = document.querySelector('.chatbot-input');
    const messageContainer = document.querySelector('.chatbot-messages');
  
    // Toggle Chat Body
    chatHeader.addEventListener('click', function () {
      chatBody.style.display = chatBody.style.display === 'none' ? 'block' : 'none';
    });
  
    // Handle Sending Message
    sendBtn.addEventListener('click', function () {
      const message = messageInput.value.trim();
      if (message) {
        addMessage('user', message);
        messageInput.value = '';
        setTimeout(() => addMessage('bot', 'I will get back to you shortly.'), 1000);
      }
    });
  
    // Function to add a message
    function addMessage(sender, text) {
      const message = document.createElement('div');
      message.classList.add('message', sender);
      message.innerText = text;
      messageContainer.appendChild(message);
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  });
  