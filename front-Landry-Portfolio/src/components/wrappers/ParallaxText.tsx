import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  wrap
} from "framer-motion";
import { useStateContext } from "../../context/ContextProvider";
import useDimensions from "../customHooks/useDimensions";
import JavaScriptIcon from "../icons/JavaScriptIcon";
import ReactIcon from "../icons/ReactIcon";
import TailwindIcon from "../icons/TailwindIcon";
import BootstrapIcon from "../icons/BootstrapIcon";
import PythonIcon from "../icons/PythonIcon";
import PhpIcon from "../icons/PhpIcon";
import PostgresIcon from "../icons/PostgresIcon";
import TypeScriptIcon from "../icons/TypeScriptIcon";
import MySqlIcon from "../icons/MySqlIcon";

const ParallaxText = ({ baseVelocity = 100 }) => {
  const {themeStyle} = useStateContext();
  const screenSize = useDimensions();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });


  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);


    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  const iconSize = () => {
    if (screenSize.width <= 640) {
      return 42;
    } else if (screenSize.width > 640 && screenSize.width < 768 ) {
      return 43;
    } else if (screenSize.width > 768 && screenSize.width < 1024 ) {
      return 44;
    } else if (screenSize.width > 1024 && screenSize.width < 1280 ) {
      return 45;
    } else if (screenSize.width > 1280 && screenSize.width < 1536 ) {
      return 46;
    } else if (screenSize.width >= 1536 ) {
      return 47;
    }
  };

  const iconStyle = {
    width: iconSize(),
    height: 55,
    fill: themeStyle.svgTertiary,
    opacity: 0.8
  };

  return (
    <div 
      className={`
        parallax
        mx-5
        mt-5
      `}
    >
      <motion.div 
        className={`
          scroller 
          text-opacity-50
          text-[12.5rem]
          sm:text-[13rem]
          md:text-[13.75rem]
          lg:text-[18.75rem]
          ${themeStyle.textTertiary}
        `}
        style={{ x }}
      >
        {
          Array.from({ length: 20 }).map((v, i) => {
            return (
              <div className="flex" key={ i }>
                <span className="mx-5 md:mx-7 lg:mx-10">
                  <JavaScriptIcon style={iconStyle} />
                </span>
                <span className="mx-5 md:mx-7 lg:mx-10">
                  <TypeScriptIcon style={iconStyle} />
                </span>
                <span className="mx-5 md:mx-7 lg:mx-10">
                  <ReactIcon style={iconStyle} />
                </span>
                <span className="mx-5 md:mx-7 lg:mx-10">
                  <TailwindIcon style={iconStyle} />
                </span>
                <span className="mx-5 md:mx-7 lg:mx-10">
                  <BootstrapIcon style={iconStyle} />
                </span>
                <span className="mx-5 md:mx-7 lg:mx-10">
                  <PythonIcon style={iconStyle} />
                </span>
                <span className="mx-5 md:mx-7 lg:mx-10">
                  <PhpIcon style={iconStyle} />
                </span>
                <span className="mx-5 md:mx-7 lg:mx-10">
                  <PostgresIcon style={iconStyle} />
                </span>
                <span className="mx-5 md:mx-7 lg:mx-10">
                  <MySqlIcon style={iconStyle} />
                </span>
              </div>
            )
          }) 
        }       
      </motion.div>
    </div>
  );
}

export default ParallaxText