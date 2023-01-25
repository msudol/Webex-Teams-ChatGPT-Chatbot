const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
app.use(bodyParser.json())

const botId = 'your_bot_id'
const accessToken = 'your_access_token'

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
          'Authorization': `Bearer ${accessToken}`
        }
      }).then(response => {
        const { data } = response
        const reply = data.choices[0].text
        axios.post(`https://api.ciscospark.com/v1/messages`, {
          roomId: message.roomId,
          text: reply
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
