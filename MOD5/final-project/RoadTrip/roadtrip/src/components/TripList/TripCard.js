import React from 'react'

const TripCard = ({ trip }) => {

  const driver = trip.driver_id

  const driverRating = () => {
    const totalStars = driver.reviews.reduce((sum, review) => (sum + review.stars), 0)
    return (totalStars/driver.reviews.length)
  }

  const available_seats = () => {
    
  }


  return (
    <div className="ui card">
      <div className="image">
        <img src="" alt="pic"/>
      </div>
      <div className="content">
        <a className="start">{trip.start_location}</a>
        <a className="end">{trip.end_location}</a>
        <a classname="duration">{trip.duration}</a>
        <div className="meta">
          <span className="price">
            ${trip.price}
          </span>
        </div>
      <div classname="seats">
        <a classname="available">{trip.available_seats}
      </div>
      <div className="extra content">
        <a>
          <i className="star icon"></i>
          {driverRating()} stars
        </a>
      </div>
      <div className="comments">{trip.comments}</div>
    </div>
  )
}

export default TripCard
