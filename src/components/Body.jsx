import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setArrayTask(JSON.parse(savedTasks));
    }
  }, []);

  const saveToLocal = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleAdd = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const newTasks = [...arrayTask, { task, color: randomColor, isCompleted: false }];
    setArrayTask(newTasks);
    setTask("");
    saveToLocal(newTasks);
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const deleteTask = (index) => {
    const updatedTasks = arrayTask.filter((_, i) => i !== index);
    setArrayTask(updatedTasks);
    saveToLocal(updatedTasks);
  };

  return (
    <div className="flex flex-grow">
      <Menu />
      <div className="flex flex-col flex-grow p-4 bg-gray-50">
        <div className="flex justify-center space-x-4 mb-4">
          <input
            onChange={handleChange}
            value={task}
            type="text"
            id="large-input"
            className="block p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96 h-20"
          />
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-20 w-50"
            onClick={handleAdd}
          >
            Add a Task
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {arrayTask.map((item, index) => (
            <Task
              key={index}
              desc={item.task}
              color={item.color}
              del={() => deleteTask(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
