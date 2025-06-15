"use client";
import React, { useState } from "react";
import SideBar from "./SideBar";


/**
 * A common menu button which will be visible in lower screens.
 * It contains a sidebar which will work on toggle button
 * 
*/

const MenuButton = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleToggleSideBar = () => {
    if (!showSideBar) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    setShowSideBar((prev) => !prev);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="flex flex-col items-center justify-center gap-1 pt-1 md:hidden"
        aria-label="Toggle menu"
        onClick={handleToggleSideBar}
      >
        <span className="w-6 h-1 bg-black rounded-2xl" />
        <span className="w-6 h-1 bg-black rounded-2xl" />
        <span className="w-6 h-1 bg-black rounded-2xl" />
      </button>

      {/* Overlay */}
      {showSideBar && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleToggleSideBar}
        />
      )}

      {/* Sidebar with transition */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${showSideBar ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <SideBar onToggleSideBar={handleToggleSideBar} />
      </div>
    </>
  );
};

export default MenuButton;
