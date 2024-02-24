import React from "react";
import { saidBarItems } from "../../assets/config/sidBar";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function SideBar() {
  const nav = useNavigate();
  const masoud = location.pathname;

  return (
    <ul className={`flex font-extrabold flex-col gap-5 p-8 pl-0`}>
      {saidBarItems.map((item, index) => (
        <li
          key={index}
          onClick={(e) => nav(item.url)}
          className={`flex items-center gap-2 cursor-pointer  ${
            masoud == item.url && "text-red-400"
          }`}
        >
          {masoud == item.url && <FaArrowLeft />}

          <span>{item.icon}</span>
          <p>{item.title}</p>
        </li>
      ))}
    </ul>
  );
}

export default SideBar;
