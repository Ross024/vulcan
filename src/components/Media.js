import React from 'react'
import ReactPlayer from 'react-player'

function Media() {
  return (
    <div className='media'>
      <div className='vulcan-video'>
        <ReactPlayer url="https://vimeo.com/183929811" controls='true' width='100%' height='35vh' style={{border: "1em solid #244a64"}} />
      </div>
    </div>
  )
}

export default Media