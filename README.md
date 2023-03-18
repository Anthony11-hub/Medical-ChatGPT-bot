# Medical Health Assistant API with GPT-3 Language Model
This chatbot uses RESTful API that utilizes the GPT-3 language model to provide expert medical advice and assistance to users. The API is designed to help users self-diagnose various illnesses and medical conditions and provide expert advice on self-treatment options using home remedies.

# Getting Started
To get started, you'll need to have an OpenAI API key. You can sign up for one on the OpenAI website.

Once you have your API key, create a .env file in the root directory of the project and add your API key as follows: 

``` 
OPENAI_KEY=your_api_key_here 
```

Next, install the dependencies using npm:

```bash
npm install
```

To start the server, run:

```bash
npm start
```

The server should now be running on http://localhost:3000.

# How to use
To use the API, send a POST request to the /message endpoint with a JSON payload containing a message for the AI assistant. The assistant will respond with a message containing expert advice on the topic of the query.

For example, to send a message using curl, run:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"message": "What are some home remedies for a cold?"}' http://localhost:3000/message
```

The API will respond with a JSON payload containing the AI assistant's message:

```bash
{
  "message": "Here are some home remedies that may help alleviate cold symptoms:\n- Drink plenty of fluids\n- Get plenty of rest\n- Use a humidifier\n- Take over-the-counter medications like acetaminophen or ibuprofen for pain and fever"
}
```



