var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/db', (req, res) => {
	console.log("db");
	req.db.collection('quotes').save(req.body, (err, result) => {
	if (err) return console.log(err)
	console.log('saved to database')
	res.redirect('/')
	});
});

module.exports = router;
