import { useStateContext } from "../../context/ContextProvider";

interface StyleProps {
  width?: string;
  height?: string;
  fill?: string;
  opacity?: number;
}

interface BrandIconProps {
  style: StyleProps;
}

const BrandIcon: React.FC<BrandIconProps> = ({ style }) => {
  const { themeStyle } = useStateContext();

  return (
    <svg
      className={`
        ${style.opacity?.toString()} 
        ms-1 
        sm:ms-[2px]
        lg:ms-0
      `}
      width={style.width}
      height={style.height}
      viewBox="0 0 237 271"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8 148H57.4C57.4 148.4 57.2 149.4 56.8 151C56.5333 152.467 56.2 154.267 55.8 156.4C55.4 158.533 55 160.867 54.6 163.4C54.3333 165.933 54.2 168.267 54.2 170.4C54.2 171.733 54.3333 173.133 54.6 174.6C54.8667 176.067 55.3333 177.467 56 178.8C56.6667 180 57.6 181.067 58.8 182C60.1333 182.8 61.7333 183.2 63.6 183.2C67.0667 183.2 69.8 181.8 71.8 179C73.9333 176.067 75.8 170.8 77.4 163.2L97.6 68H141L121.4 159.8C119.667 167.667 116.667 174.067 112.4 179C108.133 183.8 103.2 187.533 97.6 190.2C92.1333 192.867 86.2667 194.6 80 195.4C73.7333 196.333 67.7333 196.8 62 196.8C55.3333 196.8 49.6 196.333 44.8 195.4C40 194.6 35.7333 193.4 32 191.8C28.4 190.2 25.1333 188.267 22.2 186C19.2667 183.6 16.3333 181 13.4 178.2L19.8 148Z"
        fill={themeStyle.svgColor}
      />
      <path
        d="M229.8 83.2H197.6L173.8 195H130.6L154.4 83.2H122.6L126.2 68H233.2L229.8 83.2Z"
        fill={themeStyle.svgColor}
      />
      <path
        d="M99.6388 57H235L233.683 64H98L99.6388 57Z"
        fill={themeStyle.svgColor}
      />
      <path
        d="M99.6388 57H235L233.683 64H98L99.6388 57Z"
        fill={themeStyle.svgColor}
      />
      <path
        d="M101.639 46H237L235.683 53H100L101.639 46Z"
        fill={themeStyle.svgColor}
      />
      <path
        d="M101.639 46H237L235.683 53H100L101.639 46Z"
        fill={themeStyle.svgColor}
      />
      <path
        d="M22.4625 137H60L58.6594 144H21L22.4625 137Z"
        fill={themeStyle.svgColor}
      />
      <path
        d="M22.4625 137H60L58.6594 144H21L22.4625 137Z"
        fill={themeStyle.svgColor}
      />
      <path
        d="M25.4625 126H63L61.6594 133H24L25.4625 126Z"
        fill={themeStyle.svgColor}
      />
      <path
        d="M25.4625 126H63L61.6594 133H24L25.4625 126Z"
        fill={themeStyle.svgColor}
      />
      <path
        d="M5.02153 203H172L170.375 210H3L5.02153 203Z"
        fill={themeStyle.svgColor}
      />
      <path
        d="M5.02153 203H172L170.375 210H3L5.02153 203Z"
        fill={themeStyle.svgColor}
      />
      <path
        d="M2.03349 214H170L168.365 221H0L2.03349 214Z"
        fill={themeStyle.svgColor}
      />
      <path
        d="M2.03349 214H170L168.365 221H0L2.03349 214Z"
        fill={themeStyle.svgColor}
      />
    </svg>
  );
};

export default BrandIcon;
