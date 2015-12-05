var express = require('express');
var load = require('express-load');

module.exports = function(){
	var app =express();
	//config de ambiente
	app.set('port',3000);

	//middlewares
	app.use(express.static('./public'));
	app.set('view engine','ejs');
	app.set('views','./app/views');
	load('modules',{cwd:'app'})
		.then('controllers')
		.then('routes')
		.into(app);
	return app;
}