const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true,
}));

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const fetch = require('node-fetch');

app.get('/home', (req, res) => {
  const url = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ZR52hAUWcADFYvAQCDJfJghhtwRxe4Dm';

  fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
});
app.get('/sports', (req, res) => {
  const url = 'https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=ZR52hAUWcADFYvAQCDJfJghhtwRxe4Dm';
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/world', (req, res) => {
  const url = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=ZR52hAUWcADFYvAQCDJfJghhtwRxe4Dm';
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/technology', (req, res) => {
  const url = 'https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=ZR52hAUWcADFYvAQCDJfJghhtwRxe4Dm';
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/business', (req, res) => {
  const url = 'https://api.nytimes.com/svc/topstories/v2/business.json?api-key=ZR52hAUWcADFYvAQCDJfJghhtwRxe4Dm';
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});


app.get('/politics', (req, res) => {
  const url = 'https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=ZR52hAUWcADFYvAQCDJfJghhtwRxe4Dm';
  fetch(url)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.post('/search', (req, res) => {
  console.log('search nyt');
  const param = req.body;
  console.log(param, 'PARAM');

  // const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=[${param}]&api-key=ZR52hAUWcADFYvAQCDJfJghhtwRxe4Dm`;
  // console.log(url);

  // fetch(url)
  //   .then(res => res.json())
  //   .then((data) => {
  //     console.log(data);
  //     console.log('in searchhhh');
  //     res.send(data);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
