import React from 'react'
import CaseGrid from '../components/CaseGrid'
import FullScreenImage from '../components/FullScreenImage'
import Section from '../components/HomePageComp/Section'

function CasePage() {
  return (
    <div>
        <FullScreenImage
        imageSrc="./assets/cp3.jpg"
        text="Live Cases"
        />
        <CaseGrid/>
        <Section/>
    </div>
  )
}

export default CasePage