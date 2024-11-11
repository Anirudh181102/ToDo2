const mongoose = require('mongoose');

// Define the task schema
const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

// Export the task model
module.exports = mongoose.model('task', taskSchema);
