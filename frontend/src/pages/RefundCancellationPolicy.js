// src/components/RefundCancellationPolicy.js
import React from "react";

const RefundCancellationPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Refund and Cancellation Policy</h1>
        
        <p className="mb-6 text-gray-700 leading-relaxed">
          At ALIVE Foundation, we value your contributions and support. Please take a moment to read our refund and cancellation policy.
        </p>
        
        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Refund Policy</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          All donations made to ALIVE Foundation are non-refundable. By donating, you acknowledge and agree that you are making a voluntary contribution to our organization.
        </p>
        <p className="mb-6 text-gray-700 leading-relaxed">
          In exceptional circumstances, such as duplicate donations or technical errors, requests for refunds may be considered on a case-by-case basis. To request a review of your donation, please contact us at <a href="mailto:support@alivefoundation.org" className="text-blue-500 underline">support@alivefoundation.org</a>.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Cancellation Policy</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          If you wish to cancel your support or recurring donation, please contact us at <a href="mailto:support@alivefoundation.org" className="text-blue-500 underline">support@alivefoundation.org</a> at least 7 days before your next scheduled donation.
        </p>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Cancellations made after this period may result in the processing of the scheduled donation.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-4">Contact Us</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          For any questions regarding our refund and cancellation policy, please reach out to us via email at <a href="mailto:support@alivefoundation.org" className="text-blue-500 underline">support@alivefoundation.org</a> or call us at (123) 456-7890.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed">
          Thank you for your understanding and support!
        </p>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;
