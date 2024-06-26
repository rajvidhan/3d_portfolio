import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/index";
import { fadeIn, textVariant } from "../utills/motion";
import { github } from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  gitlink,
  source_code_link,
}) => {
  return (
    <motion.div >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary lg:h-[730px] lg:p-5 rounded-2xl lg:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img src={image} className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
          <div
            onClick={() => window.open(gitlink, "_blank")}
            className="black-gradient w-10 h-10 rounded-full   flex justify-center cursor-pointer items-center"
          >
            <img src={github} className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>

        <div className="mt-5 flex flex-col justify-evenly ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap  gap-2 ">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>

      <button
        onClick={() => window.open(source_code_link, "_blank")}
        className=" my-4 flex flex-wrap transition duration-0 hover:duration-700 border-b-[0.5rem] border-thistle hover:border-white justify-center items-center   bg-white  text-tertiary font-bold hover:bg-thistle hover:text-white   p-3 rounded-xl"
      >
        Go To WEB App
      </button>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
