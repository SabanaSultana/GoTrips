import React from 'react'
import LeftDestination from './LeftDestination'
import DestData from './DestinationData'
import RightDestination from './RightDestination'

export default function Destinations() {
  
  return (
    <div>
        {
            DestData.map((item)=>{
                if(item.id %2===0){
                    return <LeftDestination key={item.id} text={item.text} id={item.id} img1={item.img1}/>
                }
                else{
                    return <RightDestination key={item.id} text={item.text} id={item.id} img1={item.img1}/>
                }
            })
        }        
    </div>
  )
}
