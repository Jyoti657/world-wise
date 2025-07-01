import React from "react";
import { Link } from "react-router-dom";
import AppNav from "../components/AppNav";

const HomePages = () => {
  return (
    <main
      className="w-full h-screen bg-slate-700 bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/heroSection.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      {/* <AppNav /> */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <AppNav />
      </div>
      <section className="text-center px-4 relative z-10">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-8xl font-extrabold text-white">
          You travel the world
          <br />
          Worldwise keeps track of your adventures.
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-white mt-6">
          Welcome to Worldwise, your travel companion. Here you can manage your
          trips, share experiences, and connect with fellow travelers.
        </h2>
        <div>
          <Link to="/app">
            <button className="mt-8 px-16 py-5 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer transition duration-300">
              Start Tracker Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePages;
