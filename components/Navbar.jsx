"use client"
import React, { useState } from 'react';
import { FiSearch, FiBell, FiSettings, FiLogOut, FiChevronDown, FiMenu, FiHome, FiUser } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

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

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showSidebarOptions, setShowSidebarOptions] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState([]);
  

  const toggleGroup = (groupName) => {
    if (expandedGroups.includes(groupName)) {
      setExpandedGroups(expandedGroups.filter((group) => group !== groupName));
    } else {
      setExpandedGroups([...expandedGroups, groupName]);
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowProfileDropdown(false);
    setShowSidebarOptions(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
    setShowNotifications(false);
    setShowSidebarOptions(false);
  };

  const toggleSidebarOptions = () => {
    setShowSidebarOptions(!showSidebarOptions);
    setShowNotifications(false);
    setShowProfileDropdown(false);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    signOut();
  };

  return (
    <nav className="flex items-center justify-between bg-white py-4 px-8 relative">
        {/* Add sidebar options button for small screens */}
        <button
          className="text-slate-500 hover:text-slate-600 block lg:hidden"
          onClick={toggleSidebarOptions}
        >
          <FiMenu />
        </button>
      {/* Sidebar options */}
      {showSidebarOptions && (
        <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="py-2">
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
                    <span className="text-slate-400 hover:text-black whitespace-normal break-words">
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
                          className="text-slate-200 hover:text-black flex items-center"
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
      )}

      <div className="flex items-center">
        <div className="text-slate-500 font-bold text-lg">SIARH</div>
      </div>
      <div className="flex items-center">
        
        {/* Add notifications dropdown */}
        <div className="relative">
          <button
            className="text-slate-500 hover:text-slate-600"
            onClick={toggleNotifications}
          >
            <FiBell />
          </button>
          {/* Notifications dropdown content */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <ul className="py-2">
                {/* Add notifications list items */}
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">
                    <div className="flex items-center">
                      <span className="mr-2">
                        <FiSettings />
                      </span>
                      <span>Tienes 3 pendientes en el CODICE</span>
                    </div>
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">
                    <div className="flex items-center">
                      <span className="mr-2">
                        <FiSettings />
                      </span>
                      <span>Recibiste un nuevo mensaje ZIMBRA</span>
                    </div>
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">
                    <div className="flex items-center">
                      <span className="mr-2">
                        <FiSettings />
                      </span>
                      <span>Notificacion 3</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* Add profile dropdown */}
        <div className="relative ml-4">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                width={100}
                height={100}
                src="/profile_photo.webp"
                alt="Profile Photo"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Profile dropdown toggle */}
            <button
              className="ml-2 text-slate-500 hover:text-slate-600"
              onClick={toggleProfileDropdown}
            >
              <FiChevronDown />
            </button>
          </div>
          {/* Profile dropdown content */}
          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
              <ul className="py-2">
                {/* Add profile dropdown items */}
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">
                    <div className="flex items-center">
                      <span className="mr-2">
                        <FiSettings />
                      </span>
                      <span>Mi Perfil</span>
                    </div>
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <button
                    className="flex items-center text-red-500 hover:text-red-600"
                    onClick={handleLogout}
                  >
                    <span className="mr-2">
                      <FiLogOut />
                    </span>
                    <span>Cerrar Sesion</span>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
