import React from 'react';
import { motion } from 'framer-motion';

/**
 * MotionWrap - A Higher-Order Component to add motion effects to components.
 * @param {React.Component} Component - The component to be wrapped.
 * @param {string} classNames - Additional CSS class names for styling.
 * @returns {React.Component} - The wrapped component with motion effects.
 */

const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} // Animation properties
      transition={{ duration: 0.5 }} // Transition settings
      className={`${classNames} app__flex`}
    >
      <Component />
    </motion.div>
  );
};

export default MotionWrap;
