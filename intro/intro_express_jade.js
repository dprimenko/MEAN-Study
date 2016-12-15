var express = require(express);
var app = express();

app.set('view engine', 'jade');
app.set('view options', {layout:true});
app.set('views', __dirname + '/views');

app.get('/os/:name?', function(req, res, next) {
	var name = req.params.name;

	switch(name ? name.toLowerCase() : '') {
		case 'Mac':
		case 'Linux':
		case 'Windows':
			res.render('os', {os:name});
			break;
		default:
			next();
	}
});

app.get('/os/*?', function(req, res) {
	res.render('os', {os:null});
});

app.get('/?', function(req, res) {
	res.render('index');
});

var port = 8080;
app.listen(port);
console.log('Listening on port ' + port);