import React from 'react'
import { Nav } from './Nav'



export const Article = () => {
  return (
    <>
    <Nav/>
    <div className='article'>
    <div className='article-heading'>
        <h1>Review by HR</h1>
    </div>
    <div className='article-container'>
        <div className='section-1' id='review-1'>
          
        <h2>pavithra have a realtime experience in react development</h2>
        <p>review by senthil kumar</p>
        </div>

        <div className='section-1'id='review-2'>
            <h2>pavithra have problem solving ability</h2>
            <p>review by sowmi</p>
        </div>
        <div className='section-1'id='review-3'>
            <h2>pavithra have criticle thinking </h2>
            <p>review by ravi</p>
        </div>

    </div>
    
    </div>
    </>
  )
}
