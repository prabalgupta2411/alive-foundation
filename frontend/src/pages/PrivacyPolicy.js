// src/components/PrivacyPolicy.js
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center text-[#3b6572] mb-6">Privacy Policy</h1>
        
        <p className="mb-6 text-black-700 leading-relaxed">
          ALIVE FOUNDATION is committed to the ethical collection, retention, and use of information on this site www.alivefoundation.in (‘Site’) that you provide to us about yourself (‘Personal Information’).
        </p>
        
        <h2 className="text-3xl font-semibold text-[#6a8f9a] mt-6 mb-4">Your Personal Information</h2>
        <ul className="list-disc ml-5 mb-6 text-black-700">
          <li>Name</li>
          <li>Age</li>
          <li>Occupation</li>
          <li>Email and postal address</li>
          <li>Telephone number</li>
          <li>Payment processing details</li>
          <li>Limited personal details</li>
          <li>Any other data the website may require</li>
        </ul>

        <p className="mb-6 text-black-700 leading-relaxed">
          The following Privacy Policy sets out our understanding with you on the collection, use, and security of your personal information. Please read the complete Privacy Policy.
        </p>

        <p className="mb-6 text-black-700 leading-relaxed">
          Your use of the Website constitutes your consent to and shall be bound by all the terms and conditions contained in this Privacy Policy (as amended from time to time).
        </p>

        <h2 className="text-3xl font-semibold text-[#6a8f9a] mt-6 mb-4">Collection of Information</h2>
        <p className="mb-6 text-black-700 leading-relaxed">
          You browse the site anonymously. We do not require you to identify yourself or reveal any personal information when browsing through the Site. However, you may not be able to access certain sections of the Site or interact with us without providing personal information.
        </p>

        <h2 className="text-3xl font-semibold text-[#6a8f9a] mt-6 mb-4">Use of Personal Information</h2>
        <p className="mb-6 text-black-700 leading-relaxed">
          ALIVE FOUNDATION will use Personal Information for internal purposes including the following:
        </p>
        <ul className="list-disc ml-5 mb-6 text-black-700">
          <li>Sending you internal emails, features, promotional materials, surveys, and updates.</li>
          <li>Processing your donation.</li>
          <li>Receipt of donations made by you to ALIVE FOUNDATION.</li>
          <li>Maintaining an internal confidential database of all personal information collected from visitors to the Site.</li>
          <li>Evaluating and administering the activities of the Site.</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
