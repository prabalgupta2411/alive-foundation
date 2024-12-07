import React from 'react'
import ParallaxSection from '../components/HomePageComp/ParallaxSection'
import VolunteerForm from '../components/VolunteerForm'
import Section from '../components/HomePageComp/Section'

function BecomeVolunteer() {
  return (
    <div>
        <ParallaxSection/>
        <div className="bg-light-blue py-12 px-96">
      <div className="flex justify-center">
        <VolunteerForm />
      </div>
    </div>
    <Section/>
    </div>
  )
}

export default BecomeVolunteer