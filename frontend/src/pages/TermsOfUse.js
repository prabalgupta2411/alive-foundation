// src/components/TermsOfUse.js
import React from "react";

const TermsOfUse = () => {
  return (
    <div className="bg-[#F8FFFF] min-h-screen flex flex-col justify-center py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center text-[#3b6572] mb-6">Terms of Use</h1>
        
        <p className="mb-6 text-gray-700 leading-relaxed">
          Welcome to <a href="https://www.alivefoundation.in" className="text-[#3b6572] underline" target="_blank" rel="noopener noreferrer">www.alivefoundation.in</a>. If you continue to browse and use this website, you agree to be bound by and are bound by the following terms and conditions of use, which, along with our Privacy Policy, govern your relationship with ALIVE FOUNDATION concerning this website.
        </p>

        <h2 className="text-3xl font-semibold text-[#6a8f9a] mt-6 mb-4">Terms of Use</h2>
        <p className="mb-4 text-black-700 leading-relaxed">
          Your use of this website is subject to the following terms of use:
        </p>
        <ul className="list-disc ml-5 mb-6 text-black-700 leading-relaxed">
          <li>The contents and data of the pages of this website are for your general information and use only. It is subject to change without any prior notice.</li>
          <li>Neither we nor any third party make any warranties or guarantees about the accuracy, timeliness, performance, completeness, or suitability of the information on this website.</li>
          <li>Use of any information or material on this website is entirely at your own risk, for which we will not be liable.</li>
          <li>This website contains material that is owned or licensed by us. Unauthorized use of this website may lead to a claim for damages and/or a criminal offence.</li>
          <li>From time to time, this website may also include links to other websites. These do not imply that we endorse the website.</li>
          <li>Your use of this website and any dispute arising out of such use of the website are subject to the laws of India.</li>
        </ul>
      </div>
    </div>
  );
};

export default TermsOfUse;
