const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const articleRouter = require('./routes/articles')
const Article = require('./models/article.js')
const methodOverride = require('method-override')
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:' + process.env.MONGO_ATLAS_PW + '@gt-project.stng0.mongodb.net/?retryWrites=true&w=majority')


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.redirect('/home');
})
 
app.get('/home', async (req, res) => {
    const articles = await Article.find();
    res.render('../views/pages/index.ejs', { articles: articles })

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

