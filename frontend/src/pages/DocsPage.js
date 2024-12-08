import React from 'react'
import DocumentTabs from '../components/DocsPage/DocumentTabs'

function DocsPage() {
  return (
    <DocumentTabs
  documents={{
    "PAN Card": { type: "pdf", url: "/documents/ngo-pan.pdf" },
    "Registration Certificate": { type: "image", url: "/documents/reg.jpg" },
    "NGO Darpan": { type: "pdf", url: "/documents/ngo-darpan.pdf" },
  }}
/>
  )
}

export default DocsPage