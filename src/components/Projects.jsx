import React from 'react'

import './projects.css'

import logo from './images/img5.jpg'

import YoutubeEmbed from './YoutubeEmbed'

export const Projects = () => {
  return (
    <div className='projects-container'>
      <h1>Projects</h1>
      <hr id='projects-hr'></hr>
      <div className='skills-container'>
        <img id='skill-logo' src={logo} />
        <img id='skill-logo' src={logo} />
        <img id='skill-logo' src={logo} />
        <img id='skill-logo' src={logo} />
        <img id='skill-logo' src={logo} />
        <img id='skill-logo' src={logo} />
        <img id='skill-logo' src={logo} />
        <img id='skill-logo' src={logo} />
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