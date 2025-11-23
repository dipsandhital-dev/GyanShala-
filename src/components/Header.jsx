import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { Search, X, Menu, ShoppingCart, User } from 'lucide-react';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Check if user is logged in
  const [user, setUser] = useState(() => {
    const authUser = localStorage.getItem("authUser");
    return !!authUser;
  });

  const toggleMenu = () => setMenuOpened(prev => !prev);
  const toggleDropdown = () => setDropDownOpen(prev => !prev);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Listen for storage changes (in case user logs in/out in another tab)
  useEffect(() => {
    const handleStorageChange = () => {
      const authUser = localStorage.getItem("authUser");
      setUser(!!authUser);
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    setUser(false);
    setDropDownOpen(false);
    navigate("/home");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      {/* Main Container — Added vertical padding for breathing room */}
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">

        {/* Logo Section — Increased gap & padding for balance */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-11 w-11 sm:h-12 sm:w-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent hidden sm:block tracking-tight">
              BookStore
            </span>
          </Link>
        </div>

        {/* Desktop Navigation — Balanced padding & item spacing */}
        <nav className="hidden lg:flex justify-center flex-1 px-6">
          <Navbar
            setMenuOpened={setMenuOpened}
            containerStyles="flex items-center gap-x-7 xl:gap-x-9 text-sm sm:text-base font-medium bg-indigo-50 ring-1 ring-indigo-100 rounded-full py-2.5 px-4 hover:ring-indigo-200 transition-all duration-200"
          />
        </nav>

        {/* Right Icons Container — Consistent item padding */}
        <div className="flex items-center gap-4 sm:gap-5 relative">

          {/* Search Input — Better padding & width control */}
          <div className="relative hidden sm:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="pl-5 pr-11 py-2.5 w-52 sm:w-60 rounded-full border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base transition-all duration-200 shadow-sm"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4.5 w-4.5" />
            </div>
          </div>

          {/* Mobile Menu Toggle — Square padding for touch target */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-3 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-label={menuOpened ? "Close menu" : "Open menu"}
          >
            {menuOpened ? (
              <X className="h-5.5 w-5.5 text-gray-700" />
            ) : (
              <Menu className="h-5.5 w-5.5 text-gray-700" />
            )}
          </button>

          {/* Cart Icon — Added inner padding for visual weight */}
          <Link
            to="/cart"
            className="p-3 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors relative group"
            aria-label="Shopping cart"
          >
            <ShoppingCart className="h-5.5 w-5.5 text-gray-700 group-hover:text-indigo-600 transition-colors" />
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse font-semibold">
              0
            </span>
          </Link>

          {/* User Dropdown — Matched padding with others */}
          <div className="relative" ref={dropdownRef}>
            {user ? (
              <>
                <button
                  onClick={toggleDropdown}
                  className="p-3 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none"
                  aria-label="User menu"
                  aria-expanded={dropDownOpen}
                >
                  <User className="h-5.5 w-5.5 text-gray-700 hover:text-indigo-600 transition-colors" />
                </button>
                
                {/* Dropdown Menu — Improved item padding & rounded corners */}
                {dropDownOpen && (
                  <div
                    className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-xl ring-1 ring-black/5 py-3 z-50 animate-fadeIn overflow-hidden"
                    role="menu"
                    aria-orientation="vertical"
                  >
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-5 py-3 hover:bg-gray-50 active:bg-gray-100 rounded-xl text-sm text-red-600 transition-colors flex items-center gap-3"
                      role="menuitem"
                    >
                      🚪 Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="hidden sm:flex items-center px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-sm font-medium text-gray-700 transition-colors shadow-sm"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="hidden sm:flex items-center px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-sm font-medium text-white transition-colors shadow-sm"
                >
                  Sign Up
                </Link>
                {/* Mobile view buttons */}
                <Link
                  to="/login"
                  className="sm:hidden p-3 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
                  aria-label="Login"
                >
                  <User className="h-5.5 w-5.5 text-gray-700 hover:text-indigo-600 transition-colors" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {menuOpened && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm"
            onClick={toggleMenu}
            aria-hidden="true"
          />
          <div className="lg:hidden fixed top-20 right-6 p-6 bg-white rounded-2xl shadow-2xl w-64 ring-1 ring-black/5 z-50 animate-slideUp">
            <Navbar
              setMenuOpened={setMenuOpened}
              containerStyles="flex flex-col gap-y-4 text-base font-medium *:py-2.5 *:px-4 *:rounded-xl *:hover:bg-gray-50 transition-all"
            />
            {/* Add login/signup to mobile menu */}
            {!user && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  to="/login"
                  onClick={() => setMenuOpened(false)}
                  className="block w-full text-center py-2.5 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpened(false)}
                  className="block w-full text-center mt-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </header>
  );
};

export default Header;