import React, { useRef } from 'react';
import './Par1.scss';
import { motion, useScroll, useTransform } from "framer-motion";

const SkillsPar = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className='skillsPar' ref={ref} >
    
      <motion.h1  className='skill-title'>My Skills</motion.h1>
      <motion.div style={{ y: yTransform }} className='mount'></motion.div>
      <motion.div style={{ x: yTransform }} className='star'></motion.div>
    </div>
  );
}

export default SkillsPar;

