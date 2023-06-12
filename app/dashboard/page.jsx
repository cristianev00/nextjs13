"use client"
import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";
import {
  FiSearch,
  FiBell,
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiMenu,
  FiHome,
  FiUser,
} from "react-icons/fi";
import Footer from "@/components/Footer";

import { useSession, getSession } from "next-auth/react"
import Loading from "@/components/Loading";
import AccessDenied from "@/components/AccessDenied";

const sidebarData = [
  {
    groupPhoto: "/group_photo.jpeg",
    groupName: "Recursos Hidricos",
    groupIcon: FiHome,
    order: 1,
    items: [
      {
        href: "/config",
        text: "Config giugiug gig iugiughiugh",
        icon: FiSettings,
      },
    ],
  },
  {
    groupPhoto: "/group_photo.jpeg",
    groupName: "Another Group",
    groupIcon: FiUser,
    order: 2,
    items: [
      { href: "/another-link", text: "Another Link", icon: FiUser },
      { href: "/more-links", text: "More Links", icon: FiSettings },
    ],
  },
  {
    groupPhoto: "/group_photo.jpeg",
    groupName: "Another Group",
    groupIcon: FiUser,
    order: 3,
    items: [
      { href: "/another-link", text: "Another Link", icon: FiUser },
      { href: "/more-links", text: "More Links", icon: FiSettings },
    ],
  },
  {
    groupPhoto: "/group_photo.jpeg",
    groupName: "Another Group",
    groupIcon: FiUser,
    order: 4,
    items: [
      { href: "/another-link", text: "Another Link", icon: FiUser },
      { href: "/more-links", text: "More Links", icon: FiSettings },
    ],
  },
  {
    groupPhoto: "/group_photo.jpeg",
    groupName: "Another Group",
    groupIcon: FiUser,
    order: 5,
    items: [
      { href: "/another-link", text: "Another Link", icon: FiUser },
      { href: "/more-links", text: "More Links", icon: FiSettings },
    ],
  },
  {
    groupPhoto: "/group_photo.jpeg",
    groupName: "Another Group",
    groupIcon: FiUser,
    order: 6,
    items: [
      { href: "/another-link", text: "Another Link", icon: FiUser },
      { href: "/more-links", text: "More Links", icon: FiSettings },
    ],
  },
  {
    groupPhoto: "/group_photo.jpeg",
    groupName: "Another Group",
    groupIcon: FiUser,
    order: 7,
    items: [
      { href: "/another-link", text: "Another Link", icon: FiUser },
      { href: "/more-links", text: "More Links", icon: FiSettings },
    ],
  },
];

const DashboardPage = () => {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <Loading/>
  }

  if (status === "unauthenticated") {
    return <AccessDenied/>
  }
  const sortedSidebarData = sidebarData.sort((a, b) => a.order - b.order);
  return (
    <div className="flex h-screen lg:flex-row">
      <div className="lg:w-64">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow">
        <Navbar />
        <main className="flex-grow bg-gray-200 p-8 overflow-y-auto">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center">
              <FiSearch className="mr-2 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {/* Add the content of your dashboard page */}
            {sidebarData.map((group) => (
              <Card
                key={group.groupName}
                groupPhoto={group.groupPhoto}
                groupName={group.groupName}
                items={group.items}
              />
            ))}
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default DashboardPage;
