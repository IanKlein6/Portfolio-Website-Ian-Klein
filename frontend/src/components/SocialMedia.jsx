import React from 'react';
import { FaGithub } from 'react-icons/fa'; // For GitHub
import { FaLinkedinIn } from 'react-icons/fa'; // For LinkedIn

const SocialMedia = () => {
  return (
    <div className="app__social">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/ianklein6/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <div>
                <FaLinkedinIn />
            </div>
        </a>

        {/* Github */}
        <a href="https://github.com/IanKlein6" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <div>
                <FaGithub/>
            </div>
        </a>
    </div>
  );
}

export default SocialMedia;
