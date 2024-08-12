const request = require('postman-request');

const apiKey = '5e2Z44eUM3AXtnCtPtqwgypHLSSsZTLV'; // Replace with your actual API key

const url = 'https://api.apilayer.com/exchangerates_data/latest?symbols=CAD%2CINR&base=USD';
const options = {
  url,
  headers: {
    'apikey': apiKey
  }
};

request(options, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Error:', response.statusCode);
  } else {
    console.log('Body:', body); // This will be a string representation of the JSON data
  }
});
