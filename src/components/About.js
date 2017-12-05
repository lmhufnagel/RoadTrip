import React from 'react'
import { Image } from 'semantic-ui-react'

const About = ({ About }) => {


  return (
    <div className="about">
      <h3>Road Trip is a long-distance carpooling app. Users can find a driver
      who is going from one major city to another. The Driver posts how many
      seats are available, and a rider can claim one, but must be approved
      by the driver. They can review each other in both a star rating system
      and in comments.</h3>
    <div className="about image">
    <Image src="https://defensivetraininggroup.files.wordpress.com/2017/03/roadtrip.jpg" fluid alt="pic"/>
    </div>
    </div>
  )
}

export default About
