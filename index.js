'use strict'

const app = require ('./server/app.js');

// needed for Heroku to deploy
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server listening')
});
