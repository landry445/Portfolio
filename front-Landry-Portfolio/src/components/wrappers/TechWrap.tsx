import { FC, ReactNode } from "react";
import { useStateContext } from "../../context/ContextProvider";

interface TechWrapProps {
  children: ReactNode;
}

const TechWrap: FC<TechWrapProps> = ({ children }) => {
  const { themeStyle, theme } = useStateContext();

  return (
    <span
      className={`
        py-1
        px-3
        me-[6px]
        bg-opacity-90
        font-medium
        text-opacity-90
        text-[12px]
        rounded-full
        ${themeStyle.bgSecondary}
        ${
          theme === "dark"
            ? themeStyle.textTertiary
            : "text-stone-50"
        }
      `}
    >
      {children}
    </span>
  );
};

export default TechWrap;
