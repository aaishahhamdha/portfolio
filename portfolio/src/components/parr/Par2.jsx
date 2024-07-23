import React, { useRef } from 'react';
import './Par2.scss';
import { motion, useScroll, useTransform } from "framer-motion";

const SkillsPar = ({ name }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const renderContent = () => {
    switch (name) {
      case 'skills':
        return (
          <>
            <motion.h1 className='skill-title'>My Skills</motion.h1>
            <motion.div style={{ y: yTransform }} className='mount'>
             
            </motion.div>
            <motion.div style={{ x: xTransform }} className='star'>
          
            </motion.div>
          </>
        );
      case 'projects':
        return (
          <>
            <motion.h1 className='skill-title'>My Projects</motion.h1>
            <motion.div style={{ y: yTransform }} className='mount'>
            
            </motion.div>
            <motion.div style={{ x: xTransform }} className='star'>
              
            </motion.div>
          </>
        );
      case 'blogs':
        return (
          <>
            <motion.h1 className='skill-title'>My Blogs</motion.h1>
            
            <motion.div style={{ y: yTransform }} className='mount'>
             
            </motion.div>
            <motion.div style={{ x: xTransform }} className='star'>
            
            </motion.div>
          </>
        );
      default:
        return (
          <motion.h1 className='skill-title'>Welcome</motion.h1>
        );
    }
  };

  return (
    <div className='projPar' ref={ref} >
      {renderContent()}
    </div>
  );
}

export default SkillsPar;
