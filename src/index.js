const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2 );

const corsOptions = {
    origin: 'http://localhost/'
}
app.use(cors());



// //middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/animes',require('./routes/animes'));

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${3000}`)
});