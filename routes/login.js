var express = require('express');
var database = require('../database');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
	var arr_new= [];
	database.client.query(
		'SELECT * FROM '+ database.TEST_TABLE,
		function selectCb(err, results, fields) {
			if (err) {
				throw err;
			}
			if(results){
				for(var i = 0; i < results.length; i++){
					var data_select  = {
						id:results[i].id,
						username:results[i].username,
						password:results[i].password
					};
					arr_new.push(data_select);
				}
				res.render('login', { data: arr_new });
			}
			//关闭数据库连接
			// database.client.end();
		}
	);
});

module.exports = router;
