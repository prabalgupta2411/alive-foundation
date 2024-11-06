import React from "react";
import DonateForm from "../components/DonateForm";
const DonatePage = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* On-Line Donation Section */}
          <DonateForm />

        {/* Off-Line Donation Section */}
        <div className="border p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Off-line Donation</h2>
          <h3 className="text-lg font-semibold">Bank Account Detail</h3>
          <p>
            <strong>Account Name:</strong> Alive Foundation
          </p>
          <p>
            <strong>Account Number:</strong> 025401008928
          </p>
          <p>
            <strong>IFSC Code:</strong> ICIC0000254
          </p>
          <p>
            <strong>MICR No:</strong> 110229037
          </p>
          <p>
            <strong>Branch Name:</strong> Alpha-I, Greater Noida - 201306
          </p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Scan the QR Code and Proceed with Donation</h4>
            {/* Include QR Code here */}
            <img src="/assets/QR.png" alt="QR Code" className="mt-2 max-h-fit max-w-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
