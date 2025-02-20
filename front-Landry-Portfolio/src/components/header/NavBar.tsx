import React from 'react';
import NavbarHeader from './NavbarHeader';
import SocialIcons from './SocialIcons';
import NavbarLinks from './NavbarLinks';
import { useStateContext } from "../../context/ContextProvider";

export type NavbarProps = {
  links: { label: string; href: string; icon?: React.ReactNode }[];
};

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const { themeStyle } = useStateContext();

  return (
    <nav className={`navbar top-0 w-[18.75rem] ${themeStyle.bgColor} z-20 block max-[1140px]:hidden`}>
      <div className="flex flex-col px-4 py-6 fixed w-[18.75rem] h-full">
        <NavbarHeader />
        <SocialIcons themeStyle={themeStyle} />
        <NavbarLinks links={links} themeStyle={themeStyle} />
      </div>
    </nav>
  );
};

export default Navbar;
