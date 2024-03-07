import React from "react";

const Header = () => {
  return (
    <div className="fixed navbar bg-black">
      <div className="flex-1">
      </div>
      <div className="flex-none">
      <div className="bg-white h-4 mx-2 w-20 rounded-full"></div>
      <div className="bg-white h-4 mx-2 w-20 rounded-full"></div>
      <div className="bg-white h-4 mx-2 w-20 rounded-full"></div>
        <button className="btn bg-white btn-square btn-ghost rounded-full ml-6 mr-48">
        <img className="w-5" src="/svg/hamburger.svg" alt="menu" />
        </button>
      </div>
    </div>
  );
};

export default Header;
