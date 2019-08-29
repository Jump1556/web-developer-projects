var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongobd://localhost:27017/todo-api', { useNewUrlParser: true });

mongoose.Promise = Promise; 
//so when creating routes we can use promise instead of callback function

module.exports.Todo = require("./todo"); 