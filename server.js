const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:' + process.env.MONGO_ATLAS_PW + '@gt-project.stng0.mongodb.net/?retryWrites=true&w=majority')


app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

const articles = [{
    title: 'Dog flies to the moon',
    imageURL: 'https://picsum.photos/id/237/536/354',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Generatia Tech'
},
{
    title: 'Dog flies to the moon',
    imageURL: 'https://picsum.photos/id/237/536/354',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Generatia Tech'
},
{
    title: 'Dog flies to the moon',
    imageURL: 'https://picsum.photos/id/237/536/354',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    author: 'Generatia Tech'
}
]
app.get('/home', (req, res) => {
    res.render('../views/pages/index.ejs', { articles: articles })
})
app.get('/politics', (req, res) => {
    res.render('../views/pages/politics.ejs', { articles: articles })
})
app.get('/economy', (req, res) => {
    res.render('../views/pages/economy.ejs', { articles: articles })
})
app.get('/health', (req, res) => {
    res.render('../views/pages/health.ejs', { articles: articles })
})
app.get('/education', (req, res) => {
    res.render('../views/pages/education.ejs', { articles: articles })
})
app.get('/article', (req, res) => {
    res.render('../views/pages/article.ejs', { articles: articles })
})
app.get('/form', (req, res) => {
    res.render('/views/pages/form.ejs')
})

app.use('/articles', articleRouter)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

