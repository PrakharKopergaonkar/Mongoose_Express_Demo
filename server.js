const express = require('express');
const  app = express();
const password = require("./password")
const mongoose = require("mongoose");
const Blog = require("./models/blog")

//connect to mongodb
const dbURI =   `mongodb+srv://Prakhar04:${password}@nodeclustur.urejm.mongodb.net/node-tutorial?retryWrites=true&w=majority`
mongoose.connect(dbURI, {useNewUrlParser:true, useUnifiedTopology: true})
    .then((result) => {
        console.log(result);
        console.log(`Connected to db`)
    })
    .catch((error) => {
        console.log(error)
    })



app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});


//mongoose and mongo routes

app.get("/add-blog", (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    }); 

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((error) => {
            res.send(error.message)
        });
})