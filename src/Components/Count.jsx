import React, { useEffect, useState } from 'react'

function Count() {
    const [count , setCount] =useState(100);

    useEffect(()=>{
        setTimeout(()=>{
          setCount((count)=> count + 1)  
        } ,10)
    })
  return (
    <div>
      <h1>i have rendered {count} Times. </h1>
    </div>
  )
}

export default Count
