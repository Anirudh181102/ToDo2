import React from "react";

const Navbar = () => {
  return (
      <nav className="bg-black border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYdcqrXoSmOHk1cGHt1ioiB0C8_3QtSBfGw&s"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-white">
              To Do Planner
            </span>
          </a>
        </div>
      </nav>
  );
};

export default Navbar;
