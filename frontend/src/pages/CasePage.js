import React from 'react'
import CaseGrid from '../components/CaseGrid'
import FullScreenImage from '../components/FullScreenImage'

function CasePage() {
  return (
    <div>
        <FullScreenImage
        imageSrc="./assets/cp3.jpg"
        text="Live Cases"
        />
        <CaseGrid/>
    </div>
  )
}

export default CasePage