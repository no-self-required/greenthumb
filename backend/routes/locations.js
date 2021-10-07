const { response } = require('express');
var express = require('express');
var router = express.Router();
let client = require('../db/index');

function newLocation(location) {
  const query = `INSERT INTO shops(lat, lng) VALUES ('${location.lat}', '${location.lng}')`;
  console.log('QUERY-----', query);
  client.query(query)
    .then(console.log('query has been executed successfully!'))
    .catch(e => console.log(e))
}

router.post('/', (req, res) => {
  const location = req.body;
  console.log(location);

  newLocation(location);
  res.json();
})

router.get('/', (req, res) => {
  const query = `
  SELECT *
  FROM shops;
  `
  client.query(query)
  .then(({ rows: locations }) => {
    res.json(locations)
  })
})

module.exports = router;