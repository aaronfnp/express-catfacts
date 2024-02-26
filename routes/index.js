var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const ROOT_URL = 'https://catfact.ninja/fact';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// ADD A GET REQUEST FOR API ENDPOINT
router.get('/cats/fact', function(req, res, next) {
  // LINK 
  fetch(`${ROOT_URL}`)
  .then(res => res.json())
  .then(factData => {
    res.render('cats/fact', { factData })
  })
})

module.exports = router;
