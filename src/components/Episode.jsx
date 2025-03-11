import React from 'react'

function Episode(props) {
  return (
    <div className="card">
      <p>id: {props.id}</p>
      <p>name: {props.name}</p>
      <p>air_date: {props.air_date}</p>
      <p>episode: {props.episode}</p>
      <p>created: {props.created}</p>
    </div>
  )
}

export default Episode