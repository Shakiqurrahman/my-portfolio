"use client";

import { navLinks } from "@/utils/navLinkData";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="max-width mt-20 mb-2">
      <ul className="flex gap-8 justify-center mb-6">
        {navLinks.map(({ label, path }, idx) => (
          <li key={idx}>
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
      <p className="text-center text-sm text-gray-300">
        © All rights reserved by{" "}
        <span className="text-blue-400">Shakiqur Rahman</span>
      </p>
    </footer>
  );
};

export default Footer;
