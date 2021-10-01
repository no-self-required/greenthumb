var express = require('express');
// const { default: Post } = require('../../client/src/components/Blog/Post');
var router = express.Router();
let client = require('../db/index');

function newPost(post) {
  const query = `INSERT INTO posts(title, body, likes) VALUES ('${post.title}', '${post.body}', ${post.likes})`;
  console.log('QUERY-----', query);
  client.query(query)
  .then(console.log('query has been executed successfully!'))
  .catch(e => console.log(e))
}

router.post('/', async (req, res) => {
  const post = req.body
  const {title, body, id} = req.body
  console.log('POST----',post);

  newPost(post);
});

router.get('/', async(req, res)=> {
  const query = `SELECT * FROM posts;`
  client.query(query)
  .then(result => console.log(result))
})

module.exports = router;