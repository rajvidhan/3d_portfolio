import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full lg:h-screen h-[740px] mx-auto first-letter:">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]  max-w-7xl lg:mx-auto flex lg:flex-row flex-col items-start
    gap-5`}
      >
        <div className="flex flex-row gap-10">
        <div className="flex flex-col justify-center items-center mt-5">
          {/* //side line */}
          <div className="w-5 h-5 rounded-full cursor-pointer bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 cursor-pointer violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi , I'm <span className="text-[#915eff]">Vidhan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces,
            <br className="sm:block hidden" />
            web applications and interactive websites.
          </p>
        </div>{" "}
        </div>

        <div className="lg:hidden block mt-5">
          <img
            src="../../public/profile.jpeg"
            class=" rounded-md inset-0 h-[300px] w-[300px] object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />
          <div class="relative p-4 mt-5 sm:p-6 lg:p-8">
            <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
              Full Stack Developer
            </p>

            <p class="text-xl  text-white sm:text-2xl font-mono">Vidhan Gour</p>

           
          </div>
        </div>

      </div>

      <ComputersCanvas className="lg:block hidden" />

      <div
        className="absolute hidden lg:bottom-10 bottom-32 w-full lg:flex justify-center 
   items-center"
      >

        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary
      flex justify-center items-start p-2"
          >
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
