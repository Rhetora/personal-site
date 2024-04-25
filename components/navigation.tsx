"use client";

import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import ThemeSwap from "@/components/ThemeBtn";
import { ThemeContext } from "@/context/ThemeContext";

const navigation = [
  //{ name: "Home", href: "/" },
  //{ name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  { name: "Qualifications", href: "/qualifications" },
  { name: "Adventures", href: "/adventures" },
  { name: "Blog", href: "/blog" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: any) => pathname == href;
  const { changeTheme } = useContext(ThemeContext);

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a className="btn btn-ghost text-semibold text-2xl" href="/">Aran McConnell</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal text-md text-semibold px-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={classNames(isActive(item.href) ? "active" : "")}
              >
                {item.name}
              </a>
            </li>
          ))}
          <ThemeSwap handleOnClick={changeTheme} />
        </ul>
      </div>
    </div>
  );
}
