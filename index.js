const config = require('./config')
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
app.use(bodyParser.json())

# Webex Teams 
const botId = config.webexTeamsBotId
const accessToken = config.webexTeamsAccessToken

# Chat GPT
const apiKey = config.openAiApiKey
const org_id = config.openAiOrganization

app.post('/', (req, res) => {
  const { data } = req.body
  if (data.resource === 'messages' && data.event === 'created') {
    const message = data.data
    if (message.personId !== botId) {
      const { text } = message
      axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: text,
        temperature: 0.7,
        max_tokens: 30
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'OpenAI-Organization': org_id
        }
      }).then(response => {
        const choice = response.data.choice;
        axios.post(`https://api.ciscospark.com/v1/messages`, {
          roomId: message.roomId,
          text: choice
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        }).catch(error => console.error(error))
      }).catch(error => console.error(error))
    }
  }
  res.end()
})

app.listen(3000, () => {
  console.log('Chatbot listening on port 3000!')
})
