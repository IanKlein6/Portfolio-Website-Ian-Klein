import React, { useState } from 'react'

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion'

import { images } from '../../constants' // Imports all images easily with out haveing to do file names
import './Navbar.scss'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar"> {/* BEM front end naming method of css classes, Block, Element, Model */}
        <div className="app__navbar-logo">
            <img src={images.logo} alt="logo" />
        </div> 
        {/* unodered list that loops through elements in nav bar */}
        <ul className="app__navbar-links"> 
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li className="app__flex p-text" key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>

        <div className='app__navbar-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)}/>

            {/* check framermotion website for more motion option */}
            {toggle && (
                <motion.div
                    whileInView={{ x: [300, 0] }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                    <HiX onClick={() => setToggle(false)}/>
                    <ul>
                    {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                        <li key={item}>
                            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                        </li>
                    ))}
                    </ul>
                </motion.div>
            )}
        </div>
    </nav>
  )
}

export default Navbar