import { motion } from "framer-motion";

interface StyleProps {
  width?: number;
  height?: number;
  stroke?: string;
  opacity?: number;
}

interface SendIconProps {
  style: StyleProps;
  ref?: React.Ref<SVGSVGElement>;
  isInViewContactIcon: boolean;
}

const SendIcon = ({ style, ref, isInViewContactIcon }: SendIconProps) => {
  const icon = {
    hidden: {
      pathLength: 0,
    },
    visible: isInViewContactIcon
      ? { pathLength: 1 }
      : { pathLength: 0 },
  };

  return (
    <motion.svg 
      ref={ref}
      xmlns="http://www.w3.org/2000/svg" 
      width={style.width} 
      height={style.height} 
      fill="none" 
      stroke={style.stroke} 
      strokeWidth="0.25"
      style={{ opacity: style.opacity }}
      viewBox="0 0 16 16"
    >
      <motion.path 
        d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"
        variants={icon}
        initial="hidden"
        animate="visible"
        transition={{
          default: { duration: 2.5, delay: 0.2, ease: "easeInOut" }
        }}
      />
    </motion.svg>
  );
};

export default SendIcon;
