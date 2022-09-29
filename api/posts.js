const express = require('express');
const postsRouter = express.Router();
const {getAllPosts} = require('../db');

postsRouter.use((req, res, next) => {
    console.log("A request is being made to /posts");

    next(); 
    });

    postsRouter.get('/api/posts', async (req, res) => {
    const posts = await getAllPosts();
    
    res.send({
        posts
    });
    });
module.exports = postsRouter;