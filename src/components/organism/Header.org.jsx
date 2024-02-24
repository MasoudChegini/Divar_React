import React from "react";
import logo from "../../assets/image/logo.svg";
import { FaArrowDown } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa6";

function Header() {
  return (
    <div className="flex font-vazirFont justify-between p-[10px] text-gray-600 border-b-2">
      <div className="flex items-center gap-[40px]">
        <img className="size-[48px]" src={logo} alt="دیوار" />

        <button className="flex items-center  gap-3 hover:bg-slate-300 rounded-md p-[5px] animate-pulse delay-500">
          <CiLocationOn />
          14 شهر
        </button>
        <button className="flex items-center  gap-3  hover:bg-slate-300 rounded-md p-[5px]  animate-pulse delay-500">
          دسته ها
          <FaArrowDown />
        </button>
        <div className="flex items-center  gap-3 ">
          <CiSearch />
          <input
            className="w-[300px] h-8 p-[15px] rounded-md"
            type="text"
            placeholder="جستجو در همه آگهی ها"
          />
        </div>
      </div>
      <div className="flex gap-[40px] ml-[50px]">
        <button className="flex items-center gap-3  hover:bg-slate-300 rounded-md p-[5px]  animate-pulse delay-500">
          <FaUserAlt />
          دیوار من
        </button>
        <button className="flex items-center gap-3  hover:bg-slate-300 rounded-md p-[5px]  animate-pulse delay-500">
          <FaRocketchat />
          چت
        </button>
        <button className=" hover:bg-slate-300 rounded-md p-[5px]  animate-pulse delay-500">
          پشتیبانی
        </button>
        <button className="bg-red-700 p-[5px] rounded-md text-white">
          ثبت آگهی
        </button>
      </div>
    </div>
  );
}

export default Header;
