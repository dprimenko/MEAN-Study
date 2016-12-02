var express = require(express);
var app = express();

app.get('/os/:name?', function(req, res, next) {
	var name = req.params.name;

	switch(name ? name.toLowerCase() : '') {
		case 'Mac':
		case 'Linux':
		case 'Windows':
			res.send(name + ' is my favourite OS.');
			break;
		default:
			next();
	}
});

app.get('/os/*?', function(req, res) {
	res.send('No OS listed.');
});

app.get('/?', function(req, res) {
	res.send('Hello World!');
});

var port = 8080;
app.listen(port);
console.log('Listening on port ' + port);