import React from 'react'
import ImageCard from './components/ImageCard'
import image from './assets/react.svg'

function App() {
  return (
    <div>
      <ImageCard name='Saniyaj' image={image}/>
      <ImageCard name='Akash' image={image}/>
    </div>
  )
}

export default App
