import React from 'react'

import './projects.css'

import gitlogo from './images/gitlogo.png'
import githublogo from './images/githublogo.png'
import reactlogo from './images/reactlogo.png'
import wordpresslogo from './images/wordpresslogo.png'
import nodejslogo from './images/nodejs.png'
import jslogo from './images/jslogo.png'
import postmanlogo from './images/postman.png'
import axioslogo from './images/axioslogo.png'

import YoutubeEmbed from './YoutubeEmbed'

export const Projects = () => {
  return (
    <div className='projects-container'>
      <h1>Projects</h1>
      <hr id='projects-hr'></hr>
      <div className='skills-container'>
        <img id='skill-logo' src={gitlogo} alt=''/>
        <img id='skill-logo' src={githublogo} alt=''/>
        <img id='skill-logo' src={nodejslogo} alt=''/>
        <img id='skill-logo' src={reactlogo} alt=''/>
        <img id='skill-logo' src={jslogo} alt=''/>
        <img id='skill-logo' src={postmanlogo} alt=''/>
        <img id='skill-logo' src={axioslogo} alt=''/>
        <img id='skill-logo' src={wordpresslogo} alt=''/>
      </div>

      <p>During my time at DevMountain, I studied web development with more of an interest in front-end and UX/UI design.</p>
      <p>(completed DevMountain projects below)</p>
      
      <div className='youtube-video-container'>
        <div>
          <p>Bone Appetit</p>
          <YoutubeEmbed  embedId='MA4-85pqWwE'/>
            <a href="https://github.com/jaidynmartinez/F24Capstone.git">GitHub Repo</a>
        </div>
        <div>
          <p>BunNeeds</p>
          <YoutubeEmbed  embedId='uDema32nW2I'/>
          <a href="https://github.com/jaidynmartinez/specs-capstone.git">GitHub Repo</a>
        </div>
      </div>
    </div>
  )
}

export default Projects