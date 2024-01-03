import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

// Skills Component displaying skills and experiences
const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  // Fetch data from experiences and skills on component mount
  useEffect(() => {
    const experiencesQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    // Fetching experiences
    client.fetch(experiencesQuery).then((data) => {
      setExperiences(data);
    });

    // Fetching skills
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      {/* Skills display container */}
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {/* Mapping over skills and displaying each skill */}
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Experiences display container */}
        <div className="app__skills-exp">
          {/* Mapping over experiences and displaying each experience */}
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {/* Displaying works for each experience */}
                {experience.works.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
