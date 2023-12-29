import React from "react";
import { motion } from "framer-motion";
import {SectionWrapper} from "../hoc"
import { styles } from "../style";
import { services } from "../constants/index";
// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utills/motion";

import ServiceCard from "./ServiceCard"




const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
            I'm a skilled software developer with expertise in frameworks 
            like React and Node.js. I'm a quick learner and collaborate closely 
            with clints to create efficient, scalable and user-friendly solutions 
            that solve real world problems. Let's work together to bring your ideas 
            to life 
            !
      </motion.p>
     
     <div className='mt-20 flex flex-wrap gap-10'>
{services.map((service, index) => (
  <ServiceCard key={service.title} index={index} {...service} />
))}
</div>
    </>
  );
};


export default SectionWrapper(About, "about");

