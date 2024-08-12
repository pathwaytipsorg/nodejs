const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // Change this if needed

const apiKey = '5e2Z44eUM3AXtnCtPtqwgypHLSSsZTLV'; // Replace with your actual API key

app.get('/spellcheck', async (req, res) => {
  const query = req.query.q; // Get the query parameter from the request
  if (!query) {
    return res.status(400).send('Missing query parameter "q"');
  }
  
  const url = `https://api.apilayer.com/spell/spellchecker?q=${query}`;
  
  try {
    const response = await axios.get(url, {
      headers: {
        'apikey': apiKey
      }
    });
    res.json(response.data); // Send the response data from the API
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
