import React from 'react'
import './Hero.css'

import AnchorLink from 'react-anchor-link-smooth-scroll';

import profile_image1 from "..//..//assets/Imgs/profile_image1.svg"
const Hero = () => {
  return (
    <div id='Home' className='hero'>
        <img src={profile_image1} alt="Profile" />
        <h1><span>I'm Parham, </span>frontend developer based in Somalia.</h1>
        <p>I'm passionate about building responsive and accessible web applications. </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchar-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>

    </div>
  )
}

export default Hero
