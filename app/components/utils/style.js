import { isAnimatedItem } from './animation'

export const intermediateTransitionProps = (condition, duration) => {
  return condition
    ? { fadeoutAnimationProcessing: true, style: { transition: 'transform 0ms ease-out' } }
    : { style: { transition: `transform ${duration}ms ease-out` } }
}

export const itemStyles = (i, state, animationProps) => {
  const { fadeOutOffset } = animationProps
  const { itemWidth, duration } = state

  return isAnimatedItem(i, animationProps)
    ? { transform: `translateX(${fadeOutOffset}px)`, animationDuration: `${duration}ms`, width: `${itemWidth}px` }
    : { width: `${itemWidth}px` }
}

export const stageStyle = (style, translate3d) => {
  return { ...style, transform: `translate3d(${translate3d}px, 0, 0)` }
}

export const wrapperStyle = ({ paddingLeft, paddingRight }) => {
  return { paddingLeft: `${paddingLeft}px`, paddingRight: `${paddingRight}px` }
}
