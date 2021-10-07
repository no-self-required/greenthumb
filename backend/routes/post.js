const { response } = require('express');
var express = require('express');
// const { default: Post } = require('../../client/src/components/Blog/Post');
var router = express.Router();
let client = require('../db/index');

function newPost(post) {
  const query = `INSERT INTO posts(title, body) VALUES ('${post.title}', '${post.body}')`;
  console.log('QUERY-----', query);
  client.query(query)
  .then(console.log('query has been executed successfully!'))
  .catch(e => console.log(e))
}

router.post('/', async (req, res) => {
  const post = req.body
  const {title, body, id} = req.body
  console.log('POST----',post);

  await newPost(post);
  res.json();
});

router.get('/', async (req, res)=> {
  const query = `
  SELECT *
  FROM posts;
  `
  client.query(query)
  .then(({ rows: posts }) => {
    res.json(posts)
  })
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  const query = `
  SELECT *
  FROM posts
  WHERE id = ${id};
  `
  client.query(query)
  .then(({ rows: post }) => {
    res.json(post[0])
  })
});

// router.delete('/:id', async (req, res) => {
//   const postId = req.params.postId;

//   const query = `DROP DATABASE [IF EXISTS] ${postId}`

//   client.query(query)
//   .then(({ rows: posts}) => {
//     res.json(posts)
//   })
// });

module.exports = router;