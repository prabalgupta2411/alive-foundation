// BottomBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Make sure to install react-router-dom if not already done

const BottomBar = () => {
  return (
    <div className="relative bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-between items-center h-16 px-4 shadow-lg max-w-full">
      <div className="flex space-x-4">
        <Link to="/terms" className="text-sm hover:underline">
          Terms & Conditions
        </Link>
        <Link to="/privacy" className="text-sm hover:underline">
          Privacy Policy
        </Link>
        <Link to="/cancellation" className="text-sm hover:underline">
          Cancellation / Refund Policy
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
