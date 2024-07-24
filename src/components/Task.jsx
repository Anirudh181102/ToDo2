import React, { useState } from "react";

const Task = (props) => {
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsDone(!isDone);
    
  };

  return (
    <div
      className={`relative p-4 pb-12 ${props.color} border border-gray-200 rounded-lg shadow dark:border-gray-700 transition-all`} // Added props.color for dynamic background color
      style={{ width: "390px" }}
    >
      <a
        href="#"
        className={`block ${isDone ? "line-through" : ""}`}
        onClick={handleClick}
      >
        <h6 className="text-2xl tracking-tight text-white dark:text-white">
          {props.desc}
        </h6>
      </a>
      <button
        type="button"
        className="absolute bottom-2 right-2 text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={props.del}
      >
        <svg
          className="w-6 h-6 text-white dark:text-white"
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
