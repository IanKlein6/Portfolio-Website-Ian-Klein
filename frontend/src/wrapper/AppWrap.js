import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

/**
 * AppWrap - A Higher-Order Component to wrap pages with common layout elements.
 * @param {React.Component} Component - The component to be wrapped.
 * @param {string} idName - The id attribute for the wrapping div, useful for navigation.
 * @param {string} classNames - Additional CSS class names for styling.
 * @returns {React.Component} - The wrapped component with layout elements.
 */

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      {/* Social media links */}
      <SocialMedia />

      {/* Main content wrapper */}
      <div className="app__wrapper app__flex">
        {/* Injected component */}
        <Component />

        {/* Copyright notice */}
        <div className="copyright">
          <p className="p-text">@2023 IAN KLEIN</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>

      {/* Navigation dots with active page highlighting */}
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;
