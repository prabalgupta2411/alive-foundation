import React, { useState } from "react";
import DocumentViewer from "../DocumentViewer"; // Import the new DocumentViewer component

const DocumentTabs = ({ documents }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(documents)[0]);

  return (
    <div className="document-tabs flex flex-col items-center p-4">
      {/* Tabs Section */}
      <div className="tabs flex flex-wrap justify-center space-x-4 mb-6">
        {Object.keys(documents).map((tab) => (
          <button
            key={tab}
            className={`tab-button text-lg font-medium py-2 px-6 rounded-md transition-all duration-300 ease-in-out ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-200"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Document Viewer Section */}
      <DocumentViewer
        type={documents[activeTab]?.type}
        url={documents[activeTab]?.url}
        title={activeTab}
      />

      <style jsx>{`
        .tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .tab-button {
          padding: 1rem 2rem;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 6px;
          cursor: pointer;
          margin: 0.5rem;
        }

        .tab-button:hover {
          background-color: #e0e0e0;
        }

        .tab-button.active {
          background-color: #007bff;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default DocumentTabs;
