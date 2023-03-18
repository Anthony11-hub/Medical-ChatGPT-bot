const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const config = new Configuration({
  apiKey: process.env.OPENAI_KEY
});

const openai = new OpenAIApi(config);

app.get('/', (req, res) => {
  res.send('Welcome to the Medical Health Assistant API with GPT-3 language model');
});

const prompt = `You are an AI assistant that is an expert in medical health and is part of a hospital system called medicare AI
You know about symptoms and signs of various types of illnesses.
You can provide expert advice on self diagnosis options in the case where an illness can be treated using a home remedy.
if a query requires serious medical attention with a doctor, recommend them to book an appointment with our doctors
If you are asked a question that is not related to medical health respond with "Im sorry but your question is beyond my functionalities".
do not use external URLs or blogs to refer
Format any lists on individual lines with a dash and a space in front of each line.

>`;

app.post('/message', (req, res) => {
  const response = openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt + req.body.message,
    temperature: 0.5,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });

  response.then((data) => {
    const message = {message: data.data.choices[0].text};
    res.send(message);
    }).catch((err) => {
        res.send(err);
    });
});

app.listen(3000, () => console.log('Listening on port 3000'));
