import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { isAdminAuthenticated, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    about: false,
    saveTax: false,
    admin: false,
  });

  const navigate = useNavigate();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (!isMenuOpen) closeAllDropdowns();
  };

  // Toggle individual dropdowns
  const toggleDropdown = (key) => {
    setDropdownStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setDropdownStates({ about: false, saveTax: false, admin: false });
  };

  // Handle navigation on link click
  const handleLinkClick = (to, isDropdownLink = false) => {
    if (!isDropdownLink) {
      setIsMenuOpen(false);
    }
    closeAllDropdowns();
    navigate(to);
  };

  // Handle clicks outside the menu
  const handleOutsideClick = (event) => {
    if (!event.target.closest(".navbar")) {
      setIsMenuOpen(false);
      closeAllDropdowns();
    }
  };

  // Add/remove event listener for outside clicks
  useEffect(() => {
    if (isMenuOpen || Object.values(dropdownStates).some((state) => state)) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen, dropdownStates]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/support-life", label: "Support a Life" },
    { to: "/become-volunteer", label: "Become Volunteer" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  const adminLinks = [
    { to: "/admin/volunteers", label: "Volunteers" },
    { to: "/admin/donors", label: "Donors" },
    { to: "/admin/transactions", label: "Transactions" },
  ];

  const saveTaxLinks = [
    { to: "/save-tax/12A", label: "12A" },
    { to: "/save-tax/80G", label: "80G" },
  ];

  const aboutLinks = [
    { to: "/about-us/certificates", label: "Certificates" },
    { to: "/about-us", label: "What we do?" },
    { to: "/about-us/pan-card", label: "PAN Card" },
  ];

  return (
    <nav className="navbar bg-[#F8FFFF] border-b-2 p-3 md:p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/favicon.png" alt="NGO Logo" className="w-10 h-10" />
        <Link to="/" className="text-xl font-semibold text-gray-800">
          Alive Foundation
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-sm text-gray-700 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="hover:text-[#3b6572] border-b-2 border-transparent hover:border-[#3b6572] pb-1"
            onClick={closeAllDropdowns}
          >
            {link.label}
          </Link>
        ))}

        {/* Dropdowns */}
        {[
          { label: "About", key: "about", links: aboutLinks },
          { label: "Save Tax", key: "saveTax", links: saveTaxLinks },
          ...(isAdminAuthenticated
            ? [{ label: "Admin", key: "admin", links: adminLinks }]
            : []),
        ].map(({ label, key, links }) => (
          <div key={key} className="relative">
            <button
              onClick={() => toggleDropdown(key)}
              className="flex items-center hover:text-[#3b6572] border-b-2 border-transparent hover:border-[#3b6572] pb-1 hover:scale-105"
            >
              {label}
            </button>
            {dropdownStates[key] && (
              <div className="absolute bg-white shadow-md border border-gray-300 rounded-md mt-2 z-50 transition-transform transform hover:scale-105">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={closeAllDropdowns}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Logout Button */}
        {isAdminAuthenticated && (
          <button
            onClick={logout}
            className="text-[#3b6572] hover:text-[#3b6572] transition-transform transform hover:scale-105"
          >
            Logout
          </button>
        )}

        {/* Donate Button */}
        <Link
          to="/donateNow"
          className="text-white bg-[#6a8f9a] hover:bg-[#3b6572] px-4 py-2 rounded-md transition-transform transform hover:scale-105 "
        >
          Donate
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="bg-black opacity-50 w-full h-full"></div>
          <div className="bg-white w-4/5 max-w-sm h-full p-6 shadow-lg transition-transform transform hover:scale-105">
            <div className="space-y-6 mt-6 text-lg">
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  className="block hover:text-[#3b6572]"
                  onClick={() => handleLinkClick(link.to)}
                >
                  {link.label}
                </button>
              ))}

              {/* Dropdown Links */}
              {[
                { label: "About", key: "about", links: aboutLinks },
                { label: "Save Tax", key: "saveTax", links: saveTaxLinks },
                ...(isAdminAuthenticated
                  ? [{ label: "Admin", key: "admin", links: adminLinks }]
                  : []),
              ].map(({ label, key, links }) => (
                <div key={key}>
                  <button
                    onClick={() => toggleDropdown(key)}
                    className="flex justify-between w-full hover:text-[#3b6572] pb-2 transition-transform transform hover:scale-105"
                  >
                    {label}
                    <span>{dropdownStates[key] ? "-" : "+"}</span>
                  </button>
                  {dropdownStates[key] && (
                    <div className="ml-4 pl-4">
                      {links.map((link) => (
                        <button
                          key={link.label}
                          className="block hover:text-[#3b6572] py-1"
                          onClick={() => handleLinkClick(link.to, true)}
                        >
                          {link.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Logout Button */}
              {isAdminAuthenticated && (
                <button
                  onClick={logout}
                  className="text-[#6a8f9a] hover:text-[#3b6572] w-full text-left"
                >
                  Logout
                </button>
              )}

              {/* Donate Button */}
              <Link
                to="/donateNow"
                className="block text-center text-white bg-[#6a8f9a] hover:bg-[#3b6572] px-4 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
