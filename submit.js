// submit.js
document.getElementById('jokeForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const jokeText = document.getElementById('jokeText').value;
    
    const response = await fetch('/submit-joke', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ joke: jokeText })
    });
    
    if (response.ok) {
        alert('Joke submitted successfully!');
    } else {
        alert('Failed to submit joke.');
    }
});


// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/jokesDB', { useNewUrlParser: true, useUnifiedTopology: true });

const jokeSchema = new mongoose.Schema({
    joke: String,
    rating: { type: Number, default: 0 },
    votes: { type: Number, default: 0 }
});

const Joke = mongoose.model('Joke', jokeSchema);

app.post('/submit-joke', async (req, res) => {
    const newJoke = new Joke({ joke: req.body.joke });
    try {
        await newJoke.save();
        res.status(200).send('Joke submitted successfully!');
    } catch (error) {
        res.status(500).send('Error submitting joke.');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
