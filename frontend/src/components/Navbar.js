import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isAdminAuthenticated, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    about: false,
    saveTax: false,
    admin: false,
  });

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleDropdown = (key) => {
    setDropdownStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/support-life', label: 'Support a Life' },
    { to: '/become-volunteer', label: 'Become Volunteer' },
    { to: '/contact-us', label: 'Contact Us' },
  ];

  const adminLinks = [
    { to: '/admin/volunteers', label: 'Volunteers' },
    { to: '/admin/donors', label: 'Donors' },
    { to: '/admin/transactions', label: 'Transactions' },
  ];

  const saveTaxLinks = [
    { to: '/save-tax/tax-benefits', label: 'Tax Benefits' },
    { to: '/save-tax/how-to-save', label: 'How to Save' },
  ];

  const aboutLinks = [
    { to: '/about-us/certificates', label: 'Certificates' },
    { to: '/about-us', label: 'What we do?' },
    { to: '/about-us/pan-card', label: 'PAN Card' },
  ];

  return (
    <>
      <nav className="bg-white border-b-2 p-3 md:p-4 flex justify-between items-center">
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
              className="hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 pb-1"
            >
              {link.label}
            </Link>
          ))}

          {/* Dropdowns for Desktop */}
          <div className="relative group">
            <button
              onClick={() => toggleDropdown('about')}
              className="flex items-center hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 pb-1"
            >
              About
            </button>
            {dropdownStates.about && (
              <div className="absolute bg-white shadow-md border border-gray-300 rounded-md mt-2 z-50">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              onClick={() => toggleDropdown('saveTax')}
              className="flex items-center hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 pb-1"
            >
              Save Tax
            </button>
            {dropdownStates.saveTax && (
              <div className="absolute bg-white shadow-md border border-gray-300 rounded-md mt-2 z-50">
                {saveTaxLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {isAdminAuthenticated && (
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('admin')}
                className="flex items-center hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 pb-1"
              >
                Admin
              </button>
              {dropdownStates.admin && (
                <div className="absolute bg-white shadow-md border border-gray-300 rounded-md mt-2 z-50">
                  {adminLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {isAdminAuthenticated && (
            <button
              onClick={logout}
              className="text-blue-600 hover:text-blue-500"
            >
              Logout
            </button>
          )}

          {/* Donate Button */}
          <Link
            to="/donateNow"
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
          >
            Donate
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="bg-black opacity-50 w-full h-full"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          <div className="bg-white w-4/5 max-w-sm h-full p-6 shadow-lg transform translate-x-0 transition-transform">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-600 hover:text-gray-800 focus:outline-none mb-4"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="space-y-6 mt-6 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="block hover:text-blue-500 border-b-2 border-gray-300 pb-2"
                >
                  {link.label}
                </Link>
              ))}

              {/* Dropdowns for Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown('about')}
                  className="flex justify-between w-full hover:text-blue-500 border-b-2 border-gray-300 pb-2"
                >
                  About
                  <span>{dropdownStates.about ? '-' : '+'}</span>
                </button>
                {dropdownStates.about && (
                  <div className="ml-4 border-l-2 border-gray-300 pl-4">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="block hover:text-blue-500 py-1"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Admin Links for Mobile */}
              {isAdminAuthenticated && (
                <div>
                  <button
                    onClick={() => toggleDropdown('admin')}
                    className="flex justify-between w-full hover:text-blue-500 border-b-2 border-gray-300 pb-2"
                  >
                    Admin
                    <span>{dropdownStates.admin ? '-' : '+'}</span>
                  </button>
                  {dropdownStates.admin && (
                    <div className="ml-4 border-l-2 border-gray-300 pl-4">
                      {adminLinks.map((link) => (
                        <Link
                          key={link.label}
                          to={link.to}
                          className="block hover:text-blue-500 py-1"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Donate Button for Mobile */}
              <Link
                to="/donateNow"
                className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md mt-4 block text-center"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
