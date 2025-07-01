import React from "react";

const AppNav = () => {
  return (
    <div className="flex bg-black text-white p-4 justify-between gap-4">
      <h1>WorldWise</h1>

      <div>
        <nav className="">
          <ul className="flex justify-around gap-4">
            <li>Home</li>
            <li>About</li>
            <li>price</li>
            <li>Product</li>
          </ul>
        </nav>
      </div>
      <div>
        <button className="px-10 py-5 bg-slate-800 text-red-300">Login</button>
      </div>
    </div>
  );
};

export default AppNav;
