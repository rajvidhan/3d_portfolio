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
        className='lg:mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
           I'm Vidhan Gour, a dedicated and versatile full-stack 
           developer specializing in MERN (MongoDB, Express.js, 
           React.js, Node.js) stack development, as well as React
            Native for cross-platform mobile applications. With a 
            solid foundation in both frontend and backend 
            technologies for server-side logic implementation and database integration.
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

