import React from 'react'
import PropTypes from 'prop-types'

export const SlideInfo = ({ slideIndex, slidesLength }) => {
  return (
    <div className="alice-carousel__slide-info">
      <span className="alice-carousel__slide-info-item">{slideIndex}</span>
      <span className="alice-carousel__slide-info-item alice-carousel__slide-info-item--separator">/</span>
      <span className="alice-carousel__slide-info-item">{slidesLength}</span>
    </div>
  )
}

SlideInfo.propTypes = {
  slideIndex: PropTypes.number.isRequired,
  slidesLength: PropTypes.number.isRequired,
}
