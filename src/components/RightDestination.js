import React from 'react'
export default function RightDestination(props) {
  const id=props.id
  const text=props.text
  const img1=props.img1
  console.log("The value of id is "+id)
  return (
    <div>
        <h1>{id}</h1>
        <h1>{text}</h1>
        <img src={img1} alt="error loading image" />
    </div>
  )
}
