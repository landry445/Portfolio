import { useStateContext } from "../context/ContextProvider"
import GitHubIcon from "./icons/GitHubIcon"
import LinkedInIcon from "./icons/LinkedInIcon"
import MailIcon from "./icons/MailIcon"


const Footer = () => {

  const {themeStyle} = useStateContext();

  const iconStyle = {
    width: 30,
    height: 30,
    fill: themeStyle.svgTertiary,
    opacity: 'opacity-100'
  };

  return (
    <footer
      className="
        py-8
        flex
        flex-col
        items-center
        justify-center
      "
    >
      <div
        className="
          w-full
          flex
          justify-center
          mt-5
          md:mt-12
        "
      >
        <a
          className="mx-4"
          href="https://github.com/landry445"
        >
            <GitHubIcon 
              style={ iconStyle }
            />
        </a>
        <a
          className="mx-4"
          href="https://www.linkedin.com/in/landry-dupont"
        >
            <LinkedInIcon  
              style={ iconStyle }
            />
        </a>
        <a
          className="mx-4"
          href="mailto: landrydupont790@gmail.com"
        >
            <MailIcon   
              style={ iconStyle }
            />
        </a>
      </div>
      <div
        className={`
          mt-8
          ${themeStyle.textTertiary}
          text-lg
          text-opacity-90
        `}
      >
        <p>©Copyright 2025 - Landy Dupont</p>
      </div>
    </footer>
  )
}

export default Footer