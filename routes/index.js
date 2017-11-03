var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/images', function (req, res) {

	let options = {
		url: `https://api.gettyimages.com/v3/search/images?phrase=${req.query.text}`,
		headers: { 'Api-Key': process.env.api_key }
	};

	request(options, (err, resp, body) => {
		if (err) {
			return res.sendStatus(400);
		}
		res.status(200).json(JSON.parse(body));
	});

});

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

module.exports = router;
