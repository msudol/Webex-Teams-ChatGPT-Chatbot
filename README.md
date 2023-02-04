# Webex-Teams-ChatGPT-Chatbot
Here is an example of a simple Webex Teams chatbot written in Node.js that queries the ChatGPT API on demand (Written by ChatGPT)

This chatbot uses the Express.js framework to handle incoming webhooks from Webex Teams, and the axios library to make API calls to both the ChatGPT and the Webex Teams APIs. When a new message is received in a Webex Teams room, the chatbot will use the text of the message as the prompt for a ChatGPT API call. Once a response is received from ChatGPT, the chatbot will post the response as a new message in the same Webex Teams room.

You'll need to replace your_bot_id with your Webex Teams bot's ID and your_access_token with your Webex Teams API access token.

This is just a skeleton to start with, you can modify it as per your requirement.

## Human Developer Comments
This is an exercise to build an app from scratch with ChatGPT.  I am including the transcript of my chat to show how the code was arrived at, from initial request to revisions that require the knowledge and keen eye of an experienced developer. 

My first finding was just some omissions, which ChatGPT was able to correct. The next finding was application specific, but the base code created, failed to use the webex teams bot framework, which is generally considered essential. This code may run without it, but it will require additional considerations. Finally, the ChatGPT code did not implement security best practices as it placed API keys in plain text variables hardcoded in index.js. 

In each scenario I was able to ask ChatGPT to correct it's mistakes and it did, while also being very apologetic for screwing up.

The lesson is, while ChatGPT is capable of writing code, building templates, and getting you "off the ground" so to speak, it still requires a keen eye and good software development skills as well as code review and testing to make functional applicatins. ChatGPT isn't going to write your killer app out of the box. Be sure to read the full transcript PDF.

