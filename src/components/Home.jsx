import React from 'react'

import './home.css'

import profilePic from './images/img5.jpg'

export const ProfilePic = () => {
  return (
    <div className='home-container'>
      <div className='profilepic-container'>
          <img src={profilePic}/>
          <div className='introduction'>
              <h1>Hello!</h1>
              <p>
                  I'm Jaidyn, <br/>
                  a Full-Stack Web Developer and aspiring UI/UX Designer<br/> 
                  based in the DFW area, Texas
              </p>
          </div>
      </div>
      <hr className='home-hr'></hr>
    </div>
  )
}

export default ProfilePic