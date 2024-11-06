import React from 'react'
import About from '../components/About'
import FullScreenImage from '../components/FullScreenImage'
import { Helmet } from 'react-helmet'

export default function AboutPage() {
  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NonprofitOrganization",
            name: "Alive Foundation",
            url: "https://www.alivefoundation.in",
            logo: "https://www.alivefoundation.org/favicon.png",
            description: "Alive Foundation is dedicated to empowering lives through community support and welfare initiatives.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "A-82",
              addressLocality: "Sector-4",
              addressRegion: "Noida, Uttar Pradesh",
              postalCode: "201301",
              addressCountry: "India",
            },
          })}
        </script>
      </Helmet>
        <FullScreenImage
        imageSrc="./assets/cp5.jpg"
        text="About Us"
        />
        <About/>
    </div>
  )
}
