const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/todo");

const userSchema = new mongoose.Schema({
    task: String,
    done: Boolean
})

module.exports=mongoose.model('task', userSchema);