import React, { useRef } from "react";
import { Element } from "react-scroll";
import { motion, useInView } from "framer-motion";
import { useStateContext } from "../context/ContextProvider";
import useDimensions from "../components/customHooks/useDimensions";
import ProjectCard from "../components/Cards/ProjectCard";
import portfolio from "../projects/Portfolio";
import universDeBlibli from "../projects/universDeBlibli";
import Montessori from "../projects/Montessori";
import { scroller  } from "react-scroll";

const Projects: React.FC = () => {
  const { themeStyle } = useStateContext();
  const screenSize = useDimensions();

  const scrollToHome = () => {
    scroller.scrollTo("home", {
      duration: 500,
      smooth: true,
    });
  };

  const refTitleProj = useRef<HTMLDivElement | null>(null);
  const isInViewTitleProj = useInView(refTitleProj, {
    once: false,
    margin: "0px 10px -10px 0px",
  });
  const refBorderC = useRef<HTMLDivElement | null>(null);
    const isInViewBorderC = useInView(refBorderC, {
      once: false,
      margin: "0px 10px -10px 0px",
    });
  const refSix = useRef<HTMLDivElement | null>(null);
  const isInViewSix = useInView(refSix, {
    once: false,
    margin: "0px 10px -10px 0px",
  });
  const refSeven = useRef<HTMLDivElement | null>(null);
  const isInViewSeven = useInView(refSeven, {
    once: false,
    margin: "0px 10px -10px 0px",
  });
  const refHeight = useRef<HTMLDivElement | null>(null);
  const isInViewHeight = useInView(refHeight, {
    once: false,
    margin: "0px 10px -10px 0px",
  });

  return (
    <Element
      id="projects"
      name="Projects"
      className="
        relative
        mx-5
        md:mx-0
        snap-center
        sm:pt-0
      "
    >
      <motion.div
        className="w-full px-5 top-10 mb-12 md:top-[70px]"
        ref={refBorderC}
        initial={{ width: 0 }}
        animate={isInViewBorderC ? { width: "100%" } : { width: 0 }}
        transition={{
          duration: 2,
          delay: 0.4,
          ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className={`border-t border-opacity-30 ${themeStyle.borderTertiary}`}></div>
        </motion.div>
      <motion.div
        ref={refTitleProj}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInViewTitleProj
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.5 }
        }
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        
        <h3
          className={`
            text-[25px] 
            text-center 
            mb-5
            md:text-[35px] 
            lg:text-[40px] 
            lg:mb-8
            text-opacity-90
            ${themeStyle.textTertiary}
          `}
        >
          Mes Projets
        </h3>
      </motion.div>
      <div
        className="
          flex
          flex-col
          justify-center
          items-center
          md:grid
          md:grid-cols-2
          md:place-items-start
          w-full
        "
      >
        <motion.div
          ref={refSix}
          className="
            flex
            flex-col
            justify-start
            items-center
            w-full
            mx-5
            md:mx-0
            md:px-5
          "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInViewSix
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.5 }
          }
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          onClick={scrollToHome}
        >
        <ProjectCard
          title={portfolio.title}
          technos={portfolio.technos}
          date={portfolio.date}
        >
          {portfolio.description}
        </ProjectCard>
        </motion.div>
        <motion.div
          ref={refSeven}
          className="
            flex
            flex-col
            justify-start
            items-center
            w-full
            mx-5
            md:mx-0
            md:px-5
          "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInViewSeven
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.5 }
          }
          transition={{
            duration: 0.5,
            delay: screenSize.width < 768 ? 0.1 : 0.25,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ProjectCard
            title={Montessori.title}
            technos={Montessori.technos}
            date={Montessori.date}
            url="https://github.com/landry445/Projet-3-Montessori"
          >
            {Montessori.description}
          </ProjectCard>
        </motion.div>
        <motion.div
          ref={refHeight}
          className="
            flex
            flex-col
            justify-start
            items-center
            w-full
            mx-5
            md:mt-7
            lg:mt-9
            2xl:mt-10
            md:mx-0
            md:px-5
          "
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInViewHeight
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.5 }
          }
          transition={{
            duration: 0.5,
            delay: screenSize.width < 768 ? 0.1 : 0.25,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ProjectCard
            title={universDeBlibli.title}
            technos={universDeBlibli.technos}
            date={universDeBlibli.date}
            url="https://univers-de-blibli.netlify.app/"
          >
            {universDeBlibli.description}
          </ProjectCard>
        </motion.div>
      </div>
    </Element>
  );
};

export default Projects;
