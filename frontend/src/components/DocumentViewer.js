import React from 'react';

const DocumentViewer = ({ document }) => {
  if (document.type === 'image') {
    return <img src={document.src} alt={document.label} style={{ width: '100%', height: 'auto' }} />;
  } else if (document.type === 'pdf') {
    return (
      <iframe
        src={document.src}
        title={document.label}
        style={{ width: '100%', height: '500px', border: 'none' }}
      ></iframe>
    );
  } else {
    return <p>Unsupported document type</p>;
  }
};

export default DocumentViewer;
