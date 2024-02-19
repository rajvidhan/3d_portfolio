import React from "react";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utills/motion";
import { motion } from "framer-motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full  ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full shadow-card rounded-[20px] p-[1px] green-pink-gradient"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary flex justify-evenly items-center flex-col rounded-[20px] py-5 px-2 min-h-[280px]"
        >
          <img src={icon} alt={title} 
          className="w-28 h-28 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
export default ServiceCard;
