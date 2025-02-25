import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProfileIcon from "../components/icons/ProfileIcon";
import useDimensions from "../components/customHooks/useDimensions";
import { useStateContext } from "../context/ContextProvider";

const About: React.FC = () => {
  const screenSize = useDimensions();
  const { themeStyle } = useStateContext();

  const brandIconSize = (): string => {
    if (screenSize.width <= 640) {
      return "220";
    } else if (screenSize.width > 640 && screenSize.width < 768) {
      return "260";
    } else if (screenSize.width > 768 && screenSize.width < 1024) {
      return "270";
    } else if (screenSize.width > 1024 && screenSize.width < 1280) {
      return "290";
    } else if (screenSize.width > 1280 && screenSize.width < 1536) {
      return "330";
    } else if (screenSize.width >= 1536) {
      return "350";
    }
    return "350";
  };

  const iconSize = Number(brandIconSize());
  const textFontSize = iconSize / 20;

  const containerRef = useRef(null);
  const isInViewContainer = useInView(containerRef, {
    once: false,
    margin: "0px 10px -10px 0px",
  });

  const titleRef = useRef(null);
  const isInViewTitle = useInView(titleRef, {
    once: false,
    margin: "0px 10px -10px 0px",
  });

  return (
    <div
      id="about"
      className="
        about-page 
        w-full 
        min-h-screen 
        flex flex-col 
        items-center 
        justify-center 
        p-8
        "
    >
      <motion.h1
        ref={titleRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInViewTitle ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{
          duration: 0.5,
          delay: screenSize.width <= 640 ? 0.2 : 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={`
          text-[25px] 
          text-center 
          mb-2
          md:text-[35px] 
          lg:text-[40px] 
          lg:mb-5
          text-opacity-90
          ${themeStyle.textTertiary}
        `}
      >
        À propos
      </motion.h1>
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInViewContainer
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.5 }
        }
        transition={{
          duration: 0.5,
          delay: screenSize.width <= 768 ? 0.1 : 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="
          flex 
          flex-col 
          sm:flex-row 
          items-center 
          gap-8 
          max-w-6xl 
          w-full
          "
      >
        <div
          className="
          flex-1 
          w-full 
          text-white
          "
        >
          <p
            className={`leading-relaxed max-h-[308px] ${themeStyle.textTertiary}`}
            style={{ fontSize: `${textFontSize}px` }}
          >
            Ancien chef pâtissier, j’ai troqué les fourneaux pour le code, mais
            l’essence reste la même : rigueur, créativité et adaptation. Ma
            reconversion en développement web est une suite logique à mon goût
            pour le travail bien fait et la recherche de solutions. Organiser,
            tester, ajuster… que ce soit en Patisserie ou en tech, l’important
            est de créer quelque chose qui fonctionne et qui plaît. Aujourd’hui,
            je cherche une opportunité pour mettre cette approche au service de
            nouveaux défis !
          </p>
        </div>
        <div
          className="
          flex-1 
          w-full 
          flex 
          justify-center 
          items-center
          "
        >
          <ProfileIcon size={brandIconSize()} />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
