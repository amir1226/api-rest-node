const blogsRouter = require('./blog.routes')
const postsRouter = require('./post.routes')
const commentsRouter = require('./comment.routes')
const usersRouter = require('./user.routes')

module.exports = (app) =>{
    app.get("/saludo/:name1", (req, res) => res.send('Hola ' + req.params.name1));
    app.get("/saludo", (req, res) => res.send('Hola extraño'));
    app.use('/blogs', blogsRouter);
    app.use('/posts',postsRouter);
    app.use('/comments',commentsRouter);
    app.use('/users', usersRouter);
}

