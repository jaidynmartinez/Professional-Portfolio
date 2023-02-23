import React from 'react'

import './about.css'

import clairePhoto from './images/claire.jpeg'
import caramelPhoto from './images/caramel.jpeg'
import coffeePhoto from './images/coffee.jpeg'
import phantomPhoto from './images/phantom:bjs.jpeg'

import familyPetPhoto from './images/IMG_0667.JPG'

import petPhoto from './images/selfie.jpeg'

export const About = () => {
  return (
    <div className='about-container'>
        <h1>About</h1>
        <hr id='about-hr'></hr>
        <div>
            <p> Outside of work, you can find me tending to my many pets at home </p>
            <img className='family-pet-photo' src={familyPetPhoto} alt=''/>
            <div className='pet-photos'>
              <p>I care for my dogs, goldfish, leopard gecko, and betta fish </p>
              <img id='pet-photo' src={clairePhoto} alt=''/>
              <img id='pet-photo' src={caramelPhoto} alt=''/>
              <img id='pet-photo' src={coffeePhoto} alt=''/>
              <img id='pet-photo' src={phantomPhoto} alt=''/>
            </div>
            <div className='hobbies-photos'>
              <p>I've recently picked up beading and sewing, and I create art for friends and family!</p>
            </div>
        </div>
      </div>
  )
}

export default About