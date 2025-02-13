"use client";

import { LogOutIcon, MessageSquare } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CgClose } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { GoProject } from "react-icons/go";
import { TbLogs } from "react-icons/tb";

interface ISidebarProps {
  toggleSidebar: () => void;
}
const Sidebar = ({ toggleSidebar }: ISidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    signOut();
    router.push("/login");
  };
  return (
    <div className="bg-slate-100 min-h-screen p-4 rounded-xl sticky top-2">
      <div className="flex items-center justify-between gap-4 pl-3 pb-2 mb-2 border-b border-gray-200">
        <h2 className="text-blue-400 text-lg sm:text-xl font-semibold">
          Admin Dashboard
        </h2>
        <button
          className="flex lg:hidden items-center space-x-2 p-2 rounded-md hover:bg-gray-200 text-gray-700"
          onClick={toggleSidebar}
        >
          <CgClose className="size-5" />
        </button>
      </div>
      <ul className="space-y-2">
        <li>
          <Link
            onClick={toggleSidebar}
            href="/dashboard"
            className={`flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700 duration-300 ${
              pathname === "/dashboard" ? "bg-gray-200" : ""
            }`}
          >
            <FaHome className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleSidebar}
            href="/dashboard/blog-management"
            className={`flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700 duration-300 ${
              pathname === "/dashboard/blog-management" ? "bg-gray-200" : ""
            }`}
          >
            <TbLogs className="h-5 w-5" />
            <span>Blog Management</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleSidebar}
            href="/dashboard/project-management"
            className={`flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700 duration-300 ${
              pathname === "/dashboard/project-management" ? "bg-gray-200" : ""
            }`}
          >
            <GoProject className="h-5 w-5" />
            <span>Project Management</span>
          </Link>
        </li>
        <li>
          <Link
            onClick={toggleSidebar}
            href="/dashboard/user-messages"
            className={`flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700 duration-300 ${
              pathname === "/dashboard/user-messages" ? "bg-gray-200" : ""
            }`}
          >
            <MessageSquare className="h-5 w-5" />
            <span>User Messages</span>
          </Link>
        </li>
      </ul>
      <button
        onClick={handleLogout}
        type="button"
        className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700 duration-300 w-full"
      >
        <LogOutIcon className="h-5 w-5" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
