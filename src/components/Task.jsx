import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests

const Task = (props) => {
  const [isDone, setIsDone] = useState(props.isDone || false); // Initialize state with props.isDone

  // Function to toggle task completion
  const handleClick = async () => {
    try {
      const updatedTask = { ...props, done: !isDone }; // Create updated task data
      await axios.put(`http://localhost:3000/tasks/${props.id}`, updatedTask); // Update task in the server
      setIsDone(!isDone); // Toggle the local state
      // console.log(props.color);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div
      className={`relative p-4 pb-12 ${props.color} border border-gray-200 rounded-lg shadow transition-all`}
      
      style={{ width: "390px" }}
    >
      <a
        href="#"
        className={`block ${isDone ? "line-through" : ""}`}
        onClick={handleClick}
      >
        <h6 className="text-2xl tracking-tight text-black">
          {props.desc}
        </h6>
      </a>
      <button
        type="button"
        className="absolute bottom-2 right-2 text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
        onClick={props.del}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Task;
