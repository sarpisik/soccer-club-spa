import React from 'react'

export const Caption = ({ data }) => {
  return (
    <div className="caption">
      <div>
        {`${data.day}.${data.month}.${data.year} - ${data.hour}:${
          data.minutes
        }`}
      </div>
      <div>{data.title}</div>
      <div>Click to read...</div>
    </div>
  )
}

const Thumbnail = props => {
  const image = {
    backgroundImage: `url(${props.data})`,
    height: `${props.height}px`
  }
  return (
    <div onClick={props.onClick} style={props.style} className="thumbnail">
      <div className="image" style={image} />
      {props.children}
    </div>
  )
}

Thumbnail.defaultProps = {
  height: 200
}

export default Thumbnail
