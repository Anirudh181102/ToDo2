const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const taskModule = require('./models/task'); // Task model

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/todo", { useNewUrlParser: true, useUnifiedTopology: true });

// Basic test route
app.get('/', (req, res) => {
    res.send('Hello from backend');
});

// Get all tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await taskModule.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).send("Error fetching tasks");
    }
});

// Add a task
app.post('/tasks', async (req, res) => {
    try {
        const newTask = new taskModule({
            task: req.body.task,
            done: req.body.done || false
        });
        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (error) {
        res.status(500).send("Error adding task");
    }
});

// Update task as complete/incomplete
app.put('/tasks/:id', async (req, res) => {
    try {
        const updatedTask = await taskModule.findByIdAndUpdate(
            req.params.id,
            { done: req.body.done },
            { new: true }
        );
        res.json(updatedTask);
    } catch (error) {
        res.status(500).send("Error updating task");
    }
});

// Delete a task
app.delete('/tasks/:id', async (req, res) => {
    try {
        await taskModule.findByIdAndDelete(req.params.id);
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send("Error deleting task");
    }
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
