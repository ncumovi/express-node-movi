var express = require('express');
var router = express();
var index = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');



//路由
router.use('/', index);
router.use('/users', users);
router.use('/login', login);

module.exports = router;