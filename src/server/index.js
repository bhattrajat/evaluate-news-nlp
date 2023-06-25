const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js');

const BASE_URL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&verbose=y`;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile('./dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

app.post('/predict', async function (req, res) {
  console.log(req.body);
  const url = req.body.url;
  console.log(url);
  try {
    const resData = await fetch(`${BASE_URL}&url=${url}`);
    const data = await resData.json();
    console.log(data);
    res.status(200).json({
      message: `
      <ul>
        <li>Polarity: ${data.score_tag}</li>
        <li>Subjectivity: ${data.subjectivity}</li>
        <li>Text: ${data.sentence_list[0].text}</li>
      </ul>`,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});
