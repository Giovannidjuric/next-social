"use client";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-1 cursor-pointer items-center  justify-center"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`bg-blue-500 w-6 h-1 rounded-md origin-left ease-in-out duration-500 ${
            isOpen && "rotate-45"
          }`}
        ></div>
        <div
          className={`${
            isOpen ? "opacity-0 " : "opacity-100 "
          }bg-blue-500 w-6 h-1 rounded-md ease-in-out duration-500`}
        ></div>
        <div
          className={`bg-blue-500 w-6 h-1 rounded-md origin-left ease-in-out duration-500 ${
            isOpen && "-rotate-45"
          }`}
        ></div>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col gap-8 justify-center items-center font-medium">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
