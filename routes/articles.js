const express = require('express');
const router = express.Router();
const Article = require('./../models/article')

router.get('/new', (req, res) => {
    res.render('../views/articles/new', {article: new Article()})
})
router.get('/:slug', async (req, res) => {
    const article = await Article.findOne({slug : req.params.slug});
    if (article === null) res.redirect('/');
    res.render('articles/article', {article: article});
})

router.post('/', async (req, res) => {

    let article = new Article({ 
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
      image: req.body.image
    })
    try {
article = await article.save()
res.redirect(`articles/${article.slug}`)
    } catch(e) {
        res.render('../views/articles/new', {article: article});
    }

})

router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/');
})
module.exports = router;