import React, { useEffect } from 'react'

const ImageCard = ({name, image}) => {

  // hook
  useEffect(()=>{
    console.log('ImageCard')

    // Cleanup function
    return () => {
      console.log('ImageCard cleanup')
    }
  }, [])

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="" />
    </div>
  )
}

export default ImageCard
