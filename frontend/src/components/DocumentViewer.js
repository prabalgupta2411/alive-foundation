import React from "react";

const DocumentViewer = ({ type, url, title }) => {
  return (
    <div className="document-viewer w-full max-w-4xl border rounded-lg shadow-lg bg-white p-4">
      {type === "image" ? (
        <div className="image-container w-full flex justify-center items-center">
          <img
            src={url}
            alt={title}
            className="image-content w-full max-w-full h-auto object-contain"
            style={{
              maxHeight: "calc(100vh - 150px)", // Adjust height dynamically
            }}
          />
        </div>
      ) : (
        <div className="pdf-container w-full flex justify-center items-center">
          <iframe
            src={url}
            title={title}
            className="pdf-content"
            style={{
              border: "none",
              width: "100%",
              height: "calc(100vh - 150px)", // Adjust height dynamically
              maxHeight: "800px", // Prevent it from becoming too large
            }}
          ></iframe>
        </div>
      )}

      <style jsx>{`
        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          width: 100%;
        }

        .image-content {
          object-fit: contain;
          max-width: 100%;
          height: auto;
        }

        .pdf-container {
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          width: 100%;
        }

        .pdf-content {
          width: 100%;
          height: 100%;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default DocumentViewer;
