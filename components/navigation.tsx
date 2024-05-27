"use client";

import { usePathname } from "next/navigation";
import { useContext } from "react";
import ThemeSwap from "@/components/ThemeBtn";
import { ThemeContext } from "@/context/ThemeContext";

const env = process.env.NODE_ENV === "development";
const basePath = env ? "" : "/personal-site";
interface NavigationItem {
  name: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { name: "Home", href: "/" },
  //{ name: "Skills", href: "/skills" },
  { name: "Timeline", href: "/experience" },
  //{ name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  // { name: "Qualifications", href: "/qualifications" },
  // { name: "Adventures", href: "/adventures" },
  { name: "Blog", href: "/blog" },
];

// function handleKeyDown(e: any) {
//   var evtobj = window.event ? event : e;
//   e.stopImmediatePropagation();
//   console.log(e.keyCode);

//   if (evtobj.shiftKey && evtobj.keyCode == 68 && evtobj.ctrlKey) {
//     alert("GG!");
//   }
//   e.preventDefault();
// }

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: any) => pathname == href;
  const { changeTheme } = useContext(ThemeContext);

  // useEffect(() => {
  //   document.addEventListener("keydown", (e: KeyboardEvent) => handleKeyDown(e));
  // }, []);

  return (
    <div className="navbar bg-base-300">
      <div className="flex-1">
        <a
          className="btn btn-ghost text-semibold text-2xl"
          href={basePath + "/"}
        >
          Aran McConnell
        </a>
      </div>
      <div className="dropdown dropdown-end lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
        >
          {navigationItems.map((item) => (
            <li key={item.name}>
              <a
                href={basePath + item.href}
                className={classNames(
                  isActive(basePath + item.href) ? "active" : ""
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
          <ThemeSwap handleOnClick={changeTheme} />
        </ul>
      </div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal text-md text-semibold px-1">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <a
                href={basePath + item.href}
                className={classNames(
                  isActive(basePath + item.href) ? "active" : ""
                )}
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
