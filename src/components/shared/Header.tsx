"use client";

import { navLinks } from "@/utils/navLinkData";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <header className="flex items-center justify-between h-20 max-width">
      <h2 className="text-2xl font-bold">Portfolio</h2>
      <nav>
        <ul
          className={`md:flex ${
            isOpen
              ? "flex flex-col absolute md:static top-20 md:top-0 bg-body/80 backdrop-blur-md w-full text-center left-0 py-10 md:py-0 h-screen md:h-auto z-[9999]"
              : "hidden absolute md:static top-0"
          } md:flex-row gap-8  duration-300`}
        >
          {navLinks.map(({ label, path }, idx) => (
            <li key={idx} onClick={handleClose}>
              <Link
                href={path}
                className={`hover:text-white duration-300 font-medium text-[15px] ${
                  pathname === path ? "text-white" : "text-gray-300/85"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <Link href={"/login"}>
          <Button variant={"gray"} className="text-sm sm:text-base">
            Sign In
          </Button>
        </Link>
        <button
          type="button"
          className="bg-neutral-700 p-1.5 rounded-md block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
