var express = require('express');
// const { default: Post } = require('../../client/src/components/Blog/Post');
var router = express.Router();

router.post('/', async (req, res) => {
  const {title, body, id} = req.body
  console.log('POST TITLE----',title);
  console.log('POST BODY----', body);
  console.log('POST ID----', id);
  // const queryParams = [];

  // let queryString = 
  // `INSERT INTO posts(title, body, username, like) VALUES
  //   ('test', 'Some test body goes here.', 'mario', '10')`

  // if(req.body) {
  //   queryParams.push(req.body.)
  // }
});

module.exports = router;