
//数据库连接
var mysql = require('mysql');
var database_info = {
	TEST_DATABASE:'movi_databse_test',
	TEST_TABLE: 'login_info',
    client:''
};
//创建连接
database_info.client = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: database_info.TEST_DATABASE,
	port: '3306'
});
database_info.client.connect();




module.exports = database_info;