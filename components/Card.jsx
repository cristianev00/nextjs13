import React from "react";
import { FiSettings } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Card = ({ groupPhoto, groupName, items }) => {
  const getRandomColor = () => {
    const colors = [
      "#FCB900",
      "#33C6DE",
      "#F9506D",
      "#31C0A3",
      "#5067E1",
      "#FCB900",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-white">
      <Image
        src={groupPhoto}
        width={600}
        height={300}
        alt="Group Photo"
        className="rounded-t-lg"
      />
      <div className="h-1" style={{ background: getRandomColor() }}></div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">
          {groupName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          #CuidemosLaMadreTierra
        </p>
        <ul>
          {items.map((item) => (
            <li
              key={item.text}
              className="flex items-center mb-2 text-slate-400"
            >
              <span className="mr-2">
                <item.icon />
              </span>
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
