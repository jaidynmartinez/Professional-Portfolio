import React from 'react'

import './about.css'

import petPhoto from './images/img5.jpg'

export const About = () => {
  return (
    <div className='about-container'>
        <h1>About</h1>
        <hr id='about-hr'></hr>
        <div>
            <p> Outside of work, you can find me tending to my many pets at home </p>
            <img className='family-pet-photo' src={petPhoto}/>
            <div className='pet-photos'>
              <p>I care for my dogs, goldfish, leopard gecko, and betta fish </p>
              <img id='pet-photo' src={petPhoto}/>
              <img id='pet-photo' src={petPhoto}/>
              <img id='pet-photo' src={petPhoto}/>
              <img id='pet-photo' src={petPhoto}/>
            </div>
            <div className='hobbies-photos'>
              <p>I've recently picked up beading and sewing, and I create art for friends and family</p>
              <img id='hobby-photo' src={petPhoto}/>
              <img id='hobby-photo' src={petPhoto}/>
              <img id='hobby-photo' src={petPhoto}/>
              <img id='hobby-photo' src={petPhoto}/>
              <img id='hobby-photo' src={petPhoto}/>
              <img id='hobby-photo' src={petPhoto}/>
            </div>
        </div>
      </div>
  )
}

export default About