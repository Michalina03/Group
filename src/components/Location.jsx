import React from 'react'

function Location(props) {
  return (
    <div>
      <p>id: {props.id}</p>
      <p>name: {props.name}</p>
      <p>type: {props.type}</p>
      <p>dimension: {props.dimension}</p>
      <p>residents: {props.residents}</p>
      <p>created: {props.created}</p>
    </div>
  )
}

export default Location