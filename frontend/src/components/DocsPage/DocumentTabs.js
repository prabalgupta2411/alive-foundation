import React, { useState } from "react";

const DocumentTabs = ({ documents }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(documents)[0]);

  return (
    <div className="document-tabs">
      {/* Tabs Section */}
      <div className="tabs">
        {Object.keys(documents).map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Document Viewer Section */}
      <div className="document-viewer">
        {documents[activeTab]?.type === "image" ? (
          <img
            src={documents[activeTab].url}
            alt={activeTab}
            style={{ pointerEvents: "none" }}
          />
        ) : (
          <iframe
            src={documents[activeTab].url}
            title={activeTab}
            style={{ pointerEvents: "none", width: "100%", height: "500px" }}
          ></iframe>
        )}
      </div>

      <style jsx>{`
        .tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .tab-button {
          padding: 0.5rem 1rem;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 4px;
          cursor: pointer;
        }

        .tab-button.active {
          background-color: #007bff;
          color: white;
        }

        .document-viewer {
          border: 1px solid #ccc;
          padding: 1rem;
          border-radius: 4px;
          background-color: #fff;
        }
      `}</style>
    </div>
  );
};

export default DocumentTabs;

// Usage Example:
// <DocumentTabs
//   documents={{
//     "PAN Card": { type: "image", url: "https://example.com/pan-card.png" },
//     "Registration Certificate": { type: "pdf", url: "https://example.com/registration.pdf" },
//     "NGO Darpan": { type: "image", url: "https://example.com/ngo-darpan.png" },
//   }}
// />
