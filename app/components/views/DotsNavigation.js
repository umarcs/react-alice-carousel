import React from 'react'
import PropTypes from 'prop-types'

import * as Utils from '../utils'

export const DotsNavigation = ({ state, onClick, onMouseEnter, onMouseLeave }) => {
  const { slides, items, currentIndex, infinite } = state
  const { isNextSlideDisabled } = Utils.itemInfo(state)
  const dotsLength = Utils.getDotsNavigationLength(slides.length, items)

  return (
    <ul className="alice-carousel__dots">
      {slides.map((item, i) => {
        if (i < dotsLength) {
          const isTheLastDotIndex = Utils.isTheLastDotIndex(i, infinite, dotsLength)
          const itemIndex = Utils.getItemIndexForDotNavigation(i, slides.length, items, isTheLastDotIndex)
          const activeIndex = Utils.getActiveSlideIndex(isNextSlideDisabled, currentIndex, items, slides.length)
          const className = activeIndex === i ? ' __active' : ''

          return (
            <li
              key={i}
              onClick={() => onClick(itemIndex)}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={`alice-carousel__dots-item${className}`}
            />
          )
        }
      })}
    </ul>
  )
}

DotsNavigation.propTypes = {
  state: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
}
