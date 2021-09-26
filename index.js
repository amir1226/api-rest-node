const express = require('express');
const app = express();
const dotenv = require('dotenv');
// dotenv.config();
const port = process.env.PORT || 30666;

const{notFound, errorHandler} = require('./middlewares/error.middleware')

require('./lib/mongoose')

app.get("/", (req, res) => {
    res.send('We are ok');
})

//json
app.use(express.json());

//www-form-urlencoded
app.use(express.urlencoded({ extended: false}));

require('./routes')(app);

app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=> console.log(`listening on port ${port}`));