import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        {/* Twitter Icon */}
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <div>
                <BsTwitter />
            </div>
        </a>

        {/* Facebook Icon */}
        <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <div>
                <FaFacebookF/>
            </div>
        </a>

        {/* Instagram Icon */}
        <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <div>
                <BsInstagram />
            </div>
        </a>
    </div>
  );
}

export default SocialMedia;
