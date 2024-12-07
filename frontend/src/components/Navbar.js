import React, { useContext, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isAdminAuthenticated, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false); // State to manage admin dropdown
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
    setIsAdminOpen(false); // Close admin dropdown when main menu is toggled
  };

  const toggleAdminDropdown = () => {
    setIsAdminOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setIsAdminOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about-us', label: 'About Us' },
    { to: '/support-life', label: 'Support a Life' },
    { to: '/become-volunteer', label: 'Become Volunteer' },
    { to: '/contact-us', label: 'Contact Us' },
  ];

  const adminLinks = [
    { to: '/admin/Volunteers', label: 'Volunteers' },
    { to: '/admin/donors', label: 'Donors' },
    { to: '/admin/transactions', label: 'Transactions' },
  ];

  return (
    <nav className="bg-white border-b-2 p-3 md:p-4 flex justify-between items-center relative">
      <div className="flex items-center space-x-2">
        <img src="/favicon.png" alt="NGO Logo" className="w-10 h-10" />
        <Link to="/" className="text-xl font-semibold text-gray-800">Alive Foundation</Link>
      </div>

      <div className="block md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex space-x-6 text-sm text-gray-700 items-center">
        {navLinks.map(link => (
          <Link key={link.label} to={link.to} className="hover:text-blue-500">{link.label}</Link>
        ))}
        {isAdminAuthenticated && (
          <div className="relative group">
            <button onClick={toggleAdminDropdown} className="hover:text-blue-500">Admin</button>
            {isAdminOpen && (
              <div className="absolute bg-white shadow-md rounded-md z-50 transition-all duration-300 ease-in-out">
                {adminLinks.map(link => (
                  <Link key={link.label} to={link.to} className="block px-4 py-2 hover:bg-gray-100">{link.label}</Link>
                ))}
              </div>
            )}
          </div>
        )}
        <Link to="/donateNow" className="bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-200 hover:bg-blue-700">Donate</Link>
        {isAdminAuthenticated && (
          <button onClick={logout} className="text-blue-600 hover:text-blue-500">Logout</button>
        )}
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 flex justify-end z-50 bg-gray-800 bg-opacity-75">
          <div ref={dropdownRef} className="bg-white rounded-lg shadow-lg p-6 w-3/4 md:w-1/2 h-full overflow-y-auto">
            <button onClick={toggleMenu} className="absolute top-2 right-2 text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col space-y-4 text-gray-700 text-lg">
              {navLinks.map(link => (
                <Link key={link.label} to={link.to} onClick={toggleMenu} className="hover:text-blue-500">{link.label}</Link>
              ))}
              {isAdminAuthenticated && (
                <div>
                  <button onClick={toggleAdminDropdown} className="w-full text-left hover:text-blue-500">Admin</button>
                  {isAdminOpen && (
                    <div className="ml-4 transition-all duration-300 ease-in-out">
                      {adminLinks.map(link => (
                        <Link key={link.label} to={link.to} onClick={toggleMenu} className="block px-4 py-2 hover:bg-gray-100">{link.label}</Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <Link to="/donateNow" onClick={toggleMenu} className="bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-200 hover:bg-blue-700">Donate</Link>
              {isAdminAuthenticated && (
                <button onClick={() => { logout(); toggleMenu(); }} className="text-blue-600 hover:text-blue-500">Logout</button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
