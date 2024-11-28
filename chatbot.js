document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim()) {
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('chat-bubble', 'user');
        userMessageDiv.textContent = `You: ${userInput}`;
        document.getElementById('chat-content').appendChild(userMessageDiv);

        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('chat-bubble', 'bot');
        botMessageDiv.textContent = `Bot: Hi, How can I help?`; // Replace with bot response logic
        document.getElementById('chat-content').appendChild(botMessageDiv);

        document.getElementById('userInput').value = ''; // Clear input field
        document.getElementById('chat-content').scrollTop = document.getElementById('chat-content').scrollHeight; // Auto-scroll
    }
});
