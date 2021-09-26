const {Router} = require('express');
const router = new Router();

const comments = [
    {
        id: 1,
        content: 'Me gusto el blog',
        likes: 0,
        post_id: 1
    },
    {
        id: 2,
        content: 'Masomenos el blog',
        likes: 1,
        post_id: 1
    },
    {
        id: 3,
        content: 'Genial!',
        likes: 2,
        post_id: 2
    }
]

router.get('/comments', (req, res) => {
    return res.status(200).json({
        items:comments,
    }).end()
})

module.exports = router;