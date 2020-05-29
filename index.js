var express = require('express');
var bodyParser = require('body-parser');
const morgan = require('morgan')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

app.use(morgan('dev'))

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
});



const serviciosData = require('./connection/controller/servicios');

app.use('/api', serviciosData);

/*app.get('/',  (req, res) => {
    res.json({mensaje: "algo pasa desde index"})
})*/

app.listen(5000, () => {
	console.log('Server is running..');
});
