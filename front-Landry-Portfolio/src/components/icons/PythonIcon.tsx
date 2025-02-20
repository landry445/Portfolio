import React from "react";

interface StyleProps {
  width?: number;
  height?: number;
  fill?: string;
  opacity?: number;
}

interface JavaScriptIconProps {
  style: StyleProps;
}

const JavaScriptIcon: React.FC<JavaScriptIconProps> = ({ style }) => {

  return (
    <svg
      width={style.width}
      height={style.height}
      className={style.opacity?.toString()}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Votre contenu SVG ici */}
    </svg>
  );
};

export default JavaScriptIcon;
