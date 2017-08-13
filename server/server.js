require('./config/config');
require('./db/cassandra');

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

//const usersRoutes = require('./routes/users');
const transactionsRoutes = require('./routes/transactions');
const blocksRoutes = require('./routes/blocks');
const {handleError, handleRouteNotFound} = require('./helpers/errorHelper');

app.use(express.static(__dirname + '/../public'));

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());

// Handle user routes
// app.use('/users', usersRoutes);
app.use('/transactions', transactionsRoutes);
app.use('/blocks', blocksRoutes);


app.listen(PORT, function(){
	console.log(`Server started on port ${PORT}...`);
});
