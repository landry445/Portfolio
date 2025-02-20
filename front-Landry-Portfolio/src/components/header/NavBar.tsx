import React from 'react';
import NavbarHeader from './NavbarHeader';
import SocialIcons from './SocialIcons';
import NavbarLinks from './NavbarLinks';
import { useStateContext } from "../../context/ContextProvider";
import DarkThemeIcon from "../icons/DarkThemeIcon";
import LightThemeIcon from "../icons/LightThemeIcon";

export type NavbarProps = {
  links: { label: string; href: string; icon?: React.ReactNode }[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const { theme, themeStyle, setTheme } = useStateContext();

  const themeIcon = theme === 'Dark' ? (
    <LightThemeIcon 
      style={{ className: `w-7 h-7 transition duration-100 hover:ease-in-out ${themeStyle.textTertiary} ${themeStyle.hover.textColor}` }}
    />
  ) : (
    <DarkThemeIcon 
      style={{ className: `w-7 h-7 transition duration-100 hover:ease-in-out ${themeStyle.textTertiary} ${themeStyle.hover.textColor}` }}
    />
  );

  function toggleTheme() {
    setTheme(theme === 'Dark' ? 'Light' : 'Dark');
  }

  return (
    <nav className={`navbar top-0 w-[18.75rem] ${themeStyle.bgColor} z-20 block max-[1140px]:hidden`}>
      <div className="flex flex-col px-4 py-6 fixed w-[18.75rem] h-full">
        <NavbarHeader />
        <SocialIcons themeStyle={themeStyle} />
        <NavbarLinks links={links} themeStyle={themeStyle} />
        
        <div className="mt-auto flex justify-center">
          <button
            className="p-2 rounded-full hover:opacity-80"
            onClick={toggleTheme}
          >
            {themeIcon}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
