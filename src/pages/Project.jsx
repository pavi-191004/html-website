import React from 'react';
import { Nav } from './Nav';



export const Project = () => {
  return (
    <>
    
      <div className="container">
        <div className="section">
          <h2>Projects</h2>
          <ul>
            <li>Auction bazaar</li>
            <li>healthy waves</li>
            <li>Raavana</li>
            <li>image generator</li>
            
          </ul>
        </div>

        <div className="section" id='work'>
          <h2>Work Experience</h2>
          <div className='work-experience'>
            <p>
              <strong>leetcode</strong><br />
              Solved all the java problems<br />
              <a href="#">Visit my Profile</a>
            </p>
            </div>
            <div className='opensource'>
              <p>
                <strong>OpenSource Work</strong><br />
                real time work experience in full stack development and
                the code is uploaded in github.<br />
                <a href="#">Visit my GitHub Profile</a>
              </p>
            </div>
          </div>
        

        <div className="section" >
          <h2>Education</h2>
          <p>
            Graduated with 7.89 out of 10 CGPA. got second prize in project expo.
          </p>
          <p><strong>Courses I took:</strong></p>
          <ul>
            <li>Object Oriented Programming</li>
            <li>React </li>
            <li>typescript</li>
            <li>java script</li>
            <li>react bootstap</li>
            <li>node js</li>
            
          </ul>
        </div>
      
      </div>
     
    </>
  );
};
