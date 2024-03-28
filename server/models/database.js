const mongoose = require('mongoose');
const MONGODB_URI = "mongodb://127.0.0.1:27017/recipe"; 
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('Connected')
});
require('./Category');
require('./Recipe');
