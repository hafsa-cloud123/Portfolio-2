import React from 'react'
import './Hero.css'
import mejpg from '../../../assets/me.jpg'


import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="image">
      <img src={mejpg} alt="" />
      </div>
      <h1><span>I'm Hafsa Mudassar,</span> frontend developer based in Pakistan</h1>
      <p>I am a frontend developer form Lahore, Pakistan with 2 years of experience in multiple companies like Microsoft, Tools and Apple.</p>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
