"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiHome, FiSettings, FiUser } from "react-icons/fi";

const Sidebar = () => {
  const [expandedGroups, setExpandedGroups] = useState([]);

  const toggleGroup = (groupName) => {
    if (expandedGroups.includes(groupName)) {
      setExpandedGroups(expandedGroups.filter((group) => group !== groupName));
    } else {
      setExpandedGroups([...expandedGroups, groupName]);
    }
  };

  const sidebarData = [
    {
      groupName: "Recursos Hidricos",
      groupIcon: FiHome,
      order: 1,
      items: [
        { href: "/config", text: "Config giugiug gig iugiughiugh", icon: FiSettings },
      ],
    },
    {
      groupName: "Another Group",
      groupIcon: FiUser,
      order: 2,
      items: [
        { href: "/another-link", text: "Another Link", icon: FiUser },
        { href: "/more-links", text: "More Links", icon: FiSettings },
      ],
    },
  ];

  // Sort the sidebarData based on the order priority
  sidebarData.sort((a, b) => a.order - b.order);

  return (
    <div className="hidden lg:flex flex-col bg-[#2C2D3E] h-full w-64">
      <div className="flex flex-col items-center justify-center mb-8">
      <div className="flex justify-center mb-8">
            <Image src="/logo_mmaya_white.png" alt="Logo" width={250} height={90} />
          </div>
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image src="/profile_photo.webp" alt="Foto de Perfil" width={250} height={90} className="object-cover w-full h-full" />
        </div>
        <div className="text-center mt-2">
          <h3 className="text-white font-medium">Ever Cristian Coarite Vasquez</h3>
          <p className="text-slate-400">Tecnico Desarrollador de Sistemas</p>
        </div>
      </div>
      <div className="p-4 overflow-y-auto">
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="text-slate-400 hover:text-yellow-300 overflow-hidden">
              <div className="flex items-center">
                <FiHome className="mr-2 text-[#34BFA3]" />
                <span className="whitespace-normal">Inicio</span>
              </div>
            </Link>
          </li>
          {sidebarData.map((group, index) => (
            <li
              key={index}
              className={`border-b-2 border-[#34BFA3] cursor-pointer ${
                expandedGroups.includes(group.groupName) ? "open" : ""
              }`}
            >
              <div onClick={() => toggleGroup(group.groupName)}>
                <div className="flex items-center">
                  <group.groupIcon className="mr-2 text-[#34BFA3]" />
                  <span className="text-slate-400 hover:text-yellow-300 whitespace-normal break-words">
                    {group.groupName}
                  </span>
                </div>
              </div>
              {expandedGroups.includes(group.groupName) && (
                <ul className="pl-4 mt-2 space-y-2">
                  {group.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-slate-200 hover:text-yellow-300 flex items-center"
                      >
                        <item.icon className="mr-2 text-[#34BFA3]" />
                        <span className="whitespace-normal break-words">{item.text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
