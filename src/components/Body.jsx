import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import Task from "./Task";
import Menu from "./Menu";

const Body = () => {
  const colors = [
    "bg-red-400",
    "bg-green-400",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-indigo-400",
    "bg-purple-400",
    "bg-pink-400",
    "bg-teal-400",
    "bg-orange-400",
    "bg-cyan-400",
  ];

  const [arrayTask, setArrayTask] = useState([]);
  const [task, setTask] = useState("");

  // Fetch tasks from the server on mount
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tasks"); // Adjust URL if necessary
        setArrayTask(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // Add a task to the server
  const handleAdd = async () => {
    if (!task.trim()) return; // Prevent empty task addition

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const newTask = { task, color: randomColor, done: false };
    
    try {
      const response = await axios.post("http://localhost:3000/tasks", newTask);
      setArrayTask([...arrayTask, response.data]);
      setTask("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Delete a task from the server
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      const updatedTasks = arrayTask.filter((item) => item._id !== id);
      setArrayTask(updatedTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="flex flex-grow">
      <Menu />
      <div className="flex flex-col flex-grow p-4 bg-gray-50">
        <div className="flex justify-center space-x-4 mb-4">
          <input
            onChange={(e) => setTask(e.target.value)}
            value={task}
            type="text"
            className="block p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 w-96 h-20"
          />
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5 h-20"
            onClick={handleAdd}
          >
            Add a Task
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {arrayTask.map((item) => (
            <Task
              key={item._id} // Use unique ID from MongoDB
              id={item._id}  // Pass the ID for task updates
              desc={item.task}
              color={item.color}
            
              isDone={item.done} // Pass the completion status
              del={() => deleteTask(item._id)} // Pass ID to deleteTask
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
