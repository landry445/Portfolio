import { useStateContext } from "../../context/ContextProvider";
import useDimensions from "../customHooks/useDimensions";

interface SkillsCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  technos?: React.ReactNode[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({
  icon,
  title,
  children,
  technos,
}) => {
  const { themeStyle } = useStateContext();
  const screenSize = useDimensions();

  return (
    <article
      className={`
        skills-card
        px-2
        my-1
        md:my-0
        ${screenSize.width < 768 ? "py-4" : "py-8"}
        bg-opacity-70
        rounded-3xl
        w-full
        border
        border-opacity-20
        ${themeStyle.borderTertiary}
      `}
    >
      <div
        className={`
          skills-card-header
          flex
          items-center
          mx-3
          pb-3
          font-semibold
          text-opacity-80
          border-b
          border-opacity-20
          ${themeStyle.borderTertiary}
          ${themeStyle.textTertiary}
        `}
      >
        {icon}
        <span className="ms-5">{title}</span>
      </div>

      <ul
        className={`
          skills-card-techs
          flex
          items-center
          mt-3
          mb-2
          mx-3
        `}
      >
        {technos &&
          technos.map((techno, index) => (
            <li key={index} className="mr-3">
              {techno}
            </li>
          ))}
      </ul>

      <p
        className={`
          skills-card-description
          px-3
          pb-3
          text-opacity-70
          text-sm
          whitespace-pre-line
          leading-5
          ${themeStyle.textTertiary}
        `}
      >
        {children}
      </p>
    </article>
  );
};

export default SkillsCard;
