import { useRef } from "react";
import { Element } from "react-scroll";
import { motion, useInView } from "framer-motion";
import { useStateContext } from "../context/ContextProvider";
import useDimensions from "../components/customHooks/useDimensions";
import SkillsCard from "../components/Cards/SkillsCard";
import ScreenIcon from "../components/icons/ScreenIcon";
import ServerIcon from "../components/icons/ServerIcon";
import DataIcon from "../components/icons/DataIcon";
import JavaScriptIcon from "../components/icons/JavaScriptIcon";
import ReactIcon from "../components/icons/ReactIcon";
import TailwindIcon from "../components/icons/TailwindIcon";
import NodeIcon from "../components/icons/NodeIcon";
import PostgresIcon from "../components/icons/PostgresIcon";
import TypeScriptIcon from "../components/icons/TypeScriptIcon";
import MySqlIcon from "../components/icons/MySqlIcon";
import ExpressIcon from "../components/icons/ExpressIcon";
import JavaIcon from "../components/icons/JavaIcon";
import AiICon from "../components/icons/AiIcon.tsx";
import OpenAiIcon from "../components/icons/OpenAiIcone.tsx";
import MistralIcon from "../components/icons/MistralIcon.tsx";
import ClaudeIcon from "../components/icons/ClaudeIcon.tsx";
import DallEIcon from "../components/icons/DallEIcon.tsx";

const About: React.FC = () => {
  const { themeStyle } = useStateContext();
  const screenSize = useDimensions();

  const refTitle = useRef<HTMLDivElement>(null);
  const isInViewTitle = useInView(refTitle, {
    once: false,
    margin: "0px 20px -20px 0px",
  });
  const refFirst = useRef<HTMLDivElement>(null);
  const isInViewFirst = useInView(refFirst, {
    once: false,
    margin: "0px 10px -10px 0px",
  });
  const refSecond = useRef<HTMLDivElement>(null);
  const isInViewSecond = useInView(refSecond, {
    once: false,
    margin: "0px 10px -10px 0px",
  });
  const refThird = useRef<HTMLDivElement>(null);
  const isInViewThird = useInView(refThird, {
    once: false,
    margin: "0px 10px -10px 0px",
  });

  const refBorderC = useRef<HTMLDivElement | null>(null);
  const isInViewBorderC = useInView(refBorderC, {
    once: false,
    margin: "0px 10px -10px 0px",
  });

  const skillsStyle = {
    width: 20,
    height: 20,
    fill: themeStyle.svgTertiary,
    opacity: 0.9,
  };

  const iconStyle = {
    width: 25,
    height: 25,
    fill: themeStyle.svgTechno,
    opacity: 1,
  };

  return (
    <Element
      id="skills"
      name="Skills"
      className={`
        relative
        snap-center
        flex
        flex-col
        justify-center
        md:justify-start
        md:pt-0
        pb-12
      `}
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
        <div
          className={`border-t border-opacity-30 ${themeStyle.borderTertiary}`}
        ></div>
      </motion.div>
      <div>
        <motion.div
          ref={refTitle}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={
            isInViewTitle
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
              text-[1.5625rem] 
              text-center 
              mb-2
              md:text-[2.1875rem] 
              lg:text-[2.5rem] 
              lg:mb-5
              text-opacity-90
              ${themeStyle.textTertiary}
            `}
          >
            Compétences
          </h3>
        </motion.div>
        <div
          className="
            flex
            flex-col
            md:grid
            md:grid-cols-2
            lg:grid-cols-2
          "
        >
          <motion.div
            ref={refFirst}
            className="
              flex
              flex-col
              items-center
              justify-center
              md:justify-start
              mx-5
              my-2
            "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInViewFirst
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <SkillsCard
              icon={<ScreenIcon style={skillsStyle} />}
              title="Frontend"
              technos={[
                <JavaScriptIcon key="javascript" style={iconStyle} />,
                <TypeScriptIcon key="typescript" style={iconStyle} />,
                <ReactIcon key="react" style={iconStyle} />,
                <TailwindIcon key="tailwind" style={iconStyle} />,
              ]}
            >
              Je maîtrise des fondamentaux HTML, CSS, JavaScript.
              <br />
              utilise&#160;
              <span
                className={`
                  custom-font-secondary 
                  text-[1.125rem]
                `}
              >
                React
              </span>{" "}
              pour interface utilisateur,&#160;
              <span
                className={`
                  custom-font-secondary 
                  text-[1.125rem]
                `}
              >
                Tailwind
              </span>{" "}
              pour le design.
            </SkillsCard>
          </motion.div>
          <motion.div
            ref={refSecond}
            className="
                flex
                flex-col
                items-center
                justify-center
                md:justify-start
                mx-5
                my-2
              "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInViewSecond
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: 0.5,
              delay: screenSize.width < 768 ? 0.1 : 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <SkillsCard
              icon={<ServerIcon style={skillsStyle} />}
              title="Backend"
              technos={[
                <NodeIcon key="Node" style={iconStyle} />,
                <ExpressIcon key="Express" style={iconStyle} />,
                <JavaIcon key="Java" style={iconStyle} />,
              ]}
            >
              J'ai utilisé principalement&#160;
              <span
                className={`
                    custom-font-secondary 
                    text-[1.125rem]
                `}
              >
                Node
              </span>
              , ainsi que le framework&#160;
              <span
                className={`
                    custom-font-secondary 
                    text-[1.125rem]
                `}
              >
                Express
              </span>
              .<br />
              Je me forme aussi sur le language&#160;
              <span
                className={`
                    custom-font-secondary 
                    text-[1.125rem]
                `}
              >
                Java
              </span>
            </SkillsCard>
          </motion.div>
          <motion.div
            ref={refThird}
            className="
                flex
                flex-col
                items-center
                justify-center
                md:justify-start
                mx-5
                my-2
              "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInViewThird
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: 0.5,
              delay: screenSize.width < 768 ? 0.1 : 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <SkillsCard
              icon={<DataIcon style={skillsStyle} />}
              title="Database"
              technos={[
                <PostgresIcon key="postgres" style={iconStyle} />,
                <MySqlIcon key="mysql" style={iconStyle} />,
              ]}
            >
              J'ai travaillé principalement sur&#160;
              <span
                className={`
                    custom-font-secondary 
                    text-[1.125rem]
                `}
              >
                PostgreSQL
              </span>{" "}
              et&#160;
              <span
                className={`
                    custom-font-secondary 
                    text-[1.125rem]
                `}
              >
                MySQL
              </span>
              .
            </SkillsCard>
          </motion.div>
          <motion.div
            ref={refThird}
            className="
                flex
                flex-col
                items-center
                justify-center
                md:justify-start
                mx-5
                my-2
              "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isInViewThird
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.5 }
            }
            transition={{
              duration: 0.5,
              delay: screenSize.width < 768 ? 0.1 : 0.3,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <SkillsCard
              icon={<AiICon style={skillsStyle} />}
              title="Intelligence Artificielle"
              technos={[
                <OpenAiIcon key="OpenAi" style={iconStyle} />,
                <MistralIcon key="Mistral" style={iconStyle} />,
                <ClaudeIcon key="claude" style={iconStyle} />,
                <DallEIcon key="Dall-E" style={iconStyle} />,
              ]}
            >
              J'utilise&#160;
              <span
                className={`
                    custom-font-secondary 
                    text-[1.125rem]
                `}
              >
                ChatGpt
              </span>
              ,&#160;
              <span
                className={`
                    custom-font-secondary 
                    text-[1.125rem]
                `}
              >
                Mistral
              </span>
              ,&#160;
              <span
                className={`
                    custom-font-secondary 
                    text-[1.125rem]
                `}
              >
                Claude
              </span>{" "}
              et&#160;
              <span
                className={`
                    custom-font-secondary 
                    text-[1.125rem]
                `}
              >
                DALL·E
              </span>
              &#160; pour m'assister dans l’optimisation de mon workflow, le
              développement et la création d'image.
            </SkillsCard>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};

export default About;
