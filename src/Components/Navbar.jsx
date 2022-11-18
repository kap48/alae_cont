import React from "react";

const Navbar = () => {
  return (
    <div className=" w-full bg-slate-300 flex items-center  justify-between static ">
      <div>
        <h1 className="text-3xl font-semibold ml-4 py-2 text-indigo-500 ">
          BLOGY
        </h1>
      </div>
      <div className="mr-32">
        <ul className="flex  items-center gap-4 justify-between   ">
          <li>Home</li>
          <li>Add Contact</li>
          <li>List</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
