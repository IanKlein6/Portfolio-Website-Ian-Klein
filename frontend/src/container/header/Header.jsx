import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

// Animation variants for scaling effect
const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  // Destructure images for cleaner code
  const { django, python, react, profile } = images;

  return (
    <div className="app__header app__flex">
      {/* Information Section */}
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          {/* Greeting Badge */}
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div className="greeting-text">
              <p className="head">Hello, I am</p>
              <h1 className="head-text">Ian Klein</h1>
            </div>
          </div>

          {/* Tagline and Skills */}
          <div className="tag-cmp app__flex">
            <p className="head">Software Developer</p>
            <p className="p-text">Python, Django, Java</p>
          </div>
          <div className="tag-cmp app__flex">
            <p className="head">Advocate for Sustainable Solutions</p>
          </div>
        </div>
      </motion.div>

      {/* Technology Circles */}
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[django, python, react].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="technology" />
          </div>
        ))}
      </motion.div>
      
      {/* Profile Image */}
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="app__header-img"
      >
        <img src={profile} alt="profile" />
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
