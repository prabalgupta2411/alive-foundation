import React, { useState } from "react";
import { FaClipboard } from "react-icons/fa"; // Importing the copy icon
import DonateForm from "../components/DonateForm";

const DonatePage = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text) => {
    // Try to use the modern clipboard API
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopied(text);
          setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
        })
        .catch((err) => console.error("Failed to copy text:", err));
    } else {
      // Fallback for older browsers or mobile devices
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, 99999); // For mobile devices
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(text);
      setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* On-Line Donation Section */}
        <DonateForm />

        {/* Off-Line Donation Section */}
        <div className="border p-4 rounded-lg shadow-lg max-w-96 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold mb-4">Off-line Donation</h2>
          <h3 className="text-lg font-semibold">Bank Account Detail</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <p className="mr-2">
                <strong>Account Name:</strong> Alive Foundation
              </p>
              <FaClipboard
                className="cursor-pointer"
                onClick={() => handleCopy("Alive Foundation")}
                color={copied === "Alive Foundation" ? "green" : "gray"}
              />
            </div>
            <div className="flex items-center">
              <p className="mr-2">
                <strong>Account Number:</strong> 025401008928
              </p>
              <FaClipboard
                className="cursor-pointer"
                onClick={() => handleCopy("025401008928")}
                color={copied === "025401008928" ? "green" : "gray"}
              />
            </div>
            <div className="flex items-center">
              <p className="mr-2">
                <strong>IFSC Code:</strong> ICIC0000254
              </p>
              <FaClipboard
                className="cursor-pointer"
                onClick={() => handleCopy("ICIC0000254")}
                color={copied === "ICIC0000254" ? "green" : "gray"}
              />
            </div>
            <div className="flex items-center">
              <p className="mr-2">
                <strong>MICR No:</strong> 110229037
              </p>
              <FaClipboard
                className="cursor-pointer"
                onClick={() => handleCopy("110229037")}
                color={copied === "110229037" ? "green" : "gray"}
              />
            </div>
            <div className="flex items-center">
              <p className="mr-2">
                <strong>Branch Name:</strong> Alpha-I, Greater Noida - 201306
              </p>
              <FaClipboard
                className="cursor-pointer"
                onClick={() => handleCopy("Alpha-I, Greater Noida - 201306")}
                color={copied === "Alpha-I, Greater Noida - 201306" ? "green" : "gray"}
              />
            </div>
          </div>

          <div className="mt-4 max-w-fit">
            <h4 className="text-lg font-semibold">Scan the QR Code and Proceed with Donation</h4>
            <img src="/assets/QR.png" alt="QR Code" className="mt-2 max-w-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;
