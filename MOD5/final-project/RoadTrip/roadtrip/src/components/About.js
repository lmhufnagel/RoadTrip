import React from 'react'
import { Image } from 'semantic-ui-react'

const About = ({ About }) => {


  return (
    <div className="about">
      <div className="about image">
        <Image src="https://defensivetraininggroup.files.wordpress.com/2017/03/roadtrip.jpg" size="large" alt="pic"/>
      </div>
      <p>Road Trip is a long-distance carpooling app. Users can find a driver
      who is going from one major city to another. The Driver posts how many
      seats are available, and a rider can claim one, but must be approved
      by the driver. They can review each other in both a star rating system
      and in comments.</p>
    </div>
  )
}

export default About
