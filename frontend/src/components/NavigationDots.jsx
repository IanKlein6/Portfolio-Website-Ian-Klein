import React from 'react';

// Component to render navigation dots for different sections
const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {/* Mapping through each navigation item */}
        {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
            <a 
                href={`#${item}`} 
                key={item + index} // Unique key for each dot
                className='app__navigation-dot'
                style={active === item ? { backgroundColor: '#313BAC' } : {}}
                aria-label={`Scroll to ${item}`} // Accessibility improvement
            />    
        ))}
    </div>
  );
}

export default NavigationDots;
