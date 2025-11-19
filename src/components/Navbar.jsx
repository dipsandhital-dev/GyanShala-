import React from "react";
import { House, Contact, Newspaper, Store } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles, setMenuOpened }) => {
  const navItems = [
    { to: "/home", label: "Home", icon: <House className="w-5 h-5" /> },
    { to: "/shop", label: "Shop", icon: <Store className="w-5 h-5" /> },
    { to: "/blog", label: "Blog", icon: <Newspaper className="w-5 h-5" /> }, // Fixed: added "/"
    { to: "/contact", label: "Contact", icon: <Contact className="w-5 h-5" /> },
  ];

  return (
    <nav className={containerStyles}>
      {navItems.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to} // Ensure 'to' prop is passed to NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-white text-slate-900 ring-1 ring-slate-900/10"
                : "text-slate-700 hover:bg-slate-100"
            } flex items-center gap-x-2 px-3 py-1.5 rounded-full transition-colors`
          }
        >
          {icon}
          <span className="text-sm font-medium">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
