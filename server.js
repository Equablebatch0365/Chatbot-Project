const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse incoming JSON requests
app.use(bodyParser.json()); // Enable parsing of JSON data

// Example route to provide career suggestions based on interests
app.post('/career-suggestions', (req, res) => {
    const { interests } = req.body;  // Destructure interests from request body

    // Check if interests are provided
    if (!interests) {
        return res.status(400).json({ error: 'Interests are required' });
    }

    // List of career suggestions based on interests
    let careerSuggestions = [];

    if (interests.includes("science") && interests.includes("helping people")) {
        careerSuggestions.push("Doctor", "Nurse", "Scientist");
    } else if (interests.includes("math") && interests.includes("problem-solving")) {
        careerSuggestions.push("Engineer", "Analyst", "Data Scientist");
    } else {
        careerSuggestions.push("Teacher", "Artist", "Musician");
    }

    res.json({ suggestions: careerSuggestions });
});

// Chatbot interaction route
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;

    // Simple response logic
    let reply = "";
    if (userMessage.toLowerCase().includes("doctor")) {
        reply = "To become a doctor, you should study medicine and focus on biology and chemistry.";
    } else if (userMessage.toLowerCase().includes("engineer")) {
        reply = "To become an engineer, focus on math, physics, and problem-solving skills.";
    } else {
        reply = "Can you tell me more about your interests? I can suggest careers based on that.";
    }

    res.json({ reply });
});

// Start the server
const port = 3000; // Replace with your desired port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
