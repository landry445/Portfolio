import { motion } from "framer-motion";
import { useStateContext } from "../../context/ContextProvider";
import useDimensions from "../customHooks/useDimensions";
import TechWrap from "../wrappers/TechWrap";
import DateIcon from "../icons/DateIcon"
import LinkProjectIcon from "../icons/LinkProjectIcon"

interface ProjectCardProps {
  title: string;
  children: React.ReactNode;
  technos: string[];
  date: string;
  url?: string;
}


const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  children,
  technos,
  date,
  url,
}) => {
  const { themeStyle } = useStateContext();
  const screenSize = useDimensions();

  return (
    <motion.a
      href={url}
      target="_blank"
      className={`
        mb-6
        md:my-0
        px-2
        ${screenSize.width < 768 ? "py-4" : "py-8"}
        bg-opacity-70
        rounded-3xl
        w-full
        hover:cursor-pointer
        border
        border-opacity-20
        ${themeStyle.borderTertiary}
      `}
      whileHover={
        screenSize.width < 768 ? { scale: 1 } : { scale: 1.04 }
      }
      whileTap={
        screenSize.width < 768 ? { scale: 1 } : { scale: 0.9 }
      }
    >
      <div
        className={`
          flex
          items-center
          justify-between
          mx-3
          pb-2
          mb-2
          font-semibold
          text-lg
          text-opacity-90
          border-b
          border-opacity-20
          ${themeStyle.borderTertiary}
          ${themeStyle.textTertiary}
        `}
      >
        <span>{title}</span>
        <LinkProjectIcon style="w-6 h-6 mb-1.5"/>
      </div>
      <div
        className="
        px-2.5
        py-2
        flex
        items-center
        "
      >
        
        <DateIcon 
          style={{
            width: '18px',
            height: '18px',
            opacity: '0.9',
            ...(typeof themeStyle.textTertiary === 'object' ? themeStyle.textTertiary : {})
          }}
        />
        <span
          className={`
            w-[18px]
            h-[18px]
            text-[14px]
            text-opacity-90
            ms-3
            ${themeStyle.textTertiary}
            `}
        >
          {date}
        </span>
      </div>
      <p
        className={`
          mx-3
          pb-6
          text-opacity-70
          text-sm
          text-start
          whitespace-pre-line
          border-b
          border-opacity-20
          pt-2
          leading-relaxed
          ${themeStyle.borderTertiary}
          ${themeStyle.textTertiary}
        `}
      >
        {children}
      </p>
      <ul
        className="
          pt-4
          mx-3
          flex
          flex-wrap
        "
      >
        {technos.map((techno, index) => (
          <li key={index} className="my-[4px]">
            <TechWrap>{techno}</TechWrap>
          </li>
        ))}
      </ul>
    </motion.a>
  );
};

export default ProjectCard;
