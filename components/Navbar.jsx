"use client";
import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsChevronDown,
} from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";

import { RiDashboardFill } from "react-icons/ri";
import Link from "next/link";
const Menus = [
  { title: "Home", path: "/", icon: <MdDashboard/> },
  { title: "Pages", path: "/contact" },
  { title: "Media", spaceing: true,path:"/media"},
  {
    title: "Projects",
    submenu: true,
    submenuItems: [
        { title: "submenu1", path: "#" },
        { title: "submenu2", path: "#" },
        { title: "submenu3", path: "#" },
    ],
  },
  { title: "Analytics",path:"#"},
  { title: "Inbox",path:"#" },
  { title: "Profile", spaceing: true,path:"#" },
  { title: "Setting",path:"#" },
  { title: "Logut",path:"#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  return (
    <div
      className={`bg-slate-500 duration-500 relative p-5 pt-8 h-screen ${
        open ? "w-72" : "w-20"
      } `}
    >
      <BsArrowLeftShort 
        className={`bg-white text-3xl rounded-full absolute -right-3 top-9 border border-1 border-blue-700 cursor-pointer ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />

      <div className="inline-flex items-center">
        <AiFillAppstore
          className={`text-white/70 text-4xl rounded cursor-pointer duration-500 float-left ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`font-medium text-amber-400 duration-300 ${
            !open && "scale-0"
          }`}
        >
          Tailwind
        </h1>
      </div>

      <div
        className={`flex items-center rounded-md bg-white-70  py-2 border ${
          !open ? "px-2" : "px-4"
        }`}
      >
        <IoIosSearch className={`text-white/80  text-2xl ${open && "mr-2"}`} />
        <input
          type="search"
          className={`text-base w-full text-white bg-transparent focus:outline-none ${
            !open && "hidden"
          }`}
          placeholder="search"
        />
      </div>

      {/* nav list */}

      <ul className="pt-3">
        {Menus.map((menu, index) => (
          <React.Fragment key={index}>
            
            <Link href={menu.href || "#"} >
            <li         
              className={`text-sm text-white/60  cursor-pointer  p-2 hover:bg-slate-300  hover:text-black-400 flex items-center gap-x-2 rounded-md ${
                menu.spaceing ? "mt-9" : "mt-2"
              }`}
            >
              
     
                <span className="text-2xl text-amber-600 ">
                  <RiDashboardFill />
                </span>

                <span
                  className={`duration-500  text-base font-medium flex-1 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
          

              {menu.submenu && open && (
                <BsChevronDown
                  className={` font-bold duration-200 ${subMenuOpen && "rotate-180"} `}
                  onClick={() => {
                    setSubMenuOpen(!subMenuOpen);
                  }}
                />
              )}
            </li>

            </Link>

            {menu.submenu && subMenuOpen && open && (
              <ul  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                subMenuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}>
                {menu.submenuItems.map((subMenu, index) => (
                  <li
                    key={index}
                    className={`text-sm text-white/60  cursor-pointer  p-2 hover:bg-slate-300  hover:text-black-400 flex items-center  rounded-md px-5 `}
                  >
                    {subMenu.title}
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
