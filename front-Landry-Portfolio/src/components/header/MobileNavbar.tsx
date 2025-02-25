import { useState } from "react";
import { NavbarProps } from "./NavBar";
import SocialIcons from "./SocialIcons";
import { useStateContext } from "../../context/ContextProvider";
import NavbarHeader from "./NavbarHeader";
import DarkThemeIcon from "../icons/DarkThemeIcon";
import LightThemeIcon from "../icons/LightThemeIcon";

const MobileNavbar: React.FC<NavbarProps> = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, themeStyle, setTheme } = useStateContext();

  const themeIcon =
    theme === "Dark" ? (
      <LightThemeIcon
        style={{
          className: `w-7
             h-7
             transition
             duration-100
             hover:ease-in-out
             ${themeStyle.textTertiary}
             ${themeStyle.hover.textColor}`,
        }}
      />
    ) : (
      <DarkThemeIcon
        style={{
          className: `w-7
             h-7
             transition
             duration-100
             hover:ease-in-out
             ${themeStyle.textTertiary}
             ${themeStyle.hover.textColor}`,
        }}
      />
    );

  function toggleTheme() {
    setTheme(theme === "Dark" ? "Light" : "Dark");
  }

  return (
    <div
      className={`min-[1140px]:hidden
         absolute
         z-29
         w-full`}
    >
      <div
        className={`fixed
           right-0
           p-4`}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`focus:outline-none
             cursor-pointer
             ${themeStyle.gradientColor}
             ${themeStyle.textTertiary}`}
          aria-label="Toggle menu"
        >
          <div
            className={`relative
               w-8
               h-8`}
          >
            <svg
              className={`absolute
                 top-0
                 left-0
                 w-8
                 h-8
                 transition-opacity
                 duration-300
                 ${menuOpen ? "opacity-0" : "opacity-100"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`absolute
                 top-0
                 left-0
                 w-8
                 h-8
                 cursor-pointer
                 transition-opacity
                 duration-300
                 ${menuOpen ? "opacity-100" : "opacity-0"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </button>
      </div>

      {menuOpen && (
        <div
          className={`fixed
             inset-0
             z-20`}
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`mobile-navbar-menu
           fixed
           top-0
           left-0
           h-full
           w-[18.75rem]
           ${themeStyle.bgColor}
           transform
           transition-transform
           duration-300
           ease-in-out
           z-30
           ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          className={`flex
             flex-col
             h-full
             px-4
             py-6`}
        >
          <NavbarHeader />
          <SocialIcons themeStyle={themeStyle} />
          <ul
            className={`flex
               flex-col`}
          >
            {links.map((link, index) => (
              <li
                key={index}
                className={`py-3
                   border-t
                   border-stone-700
                   text-center`}
              >
                <a
                  href={link.href}
                  className={`flex
                     items-center
                     transition-all
                     duration-300
                     ${themeStyle.textTertiary}
                     ${themeStyle.hover.textColor}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.icon && <span className="mr-2">{link.icon}</span>}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className={`mt-auto
               flex
               justify-center`}
          >
            <button
              className={`p-2
                 rounded-full
                 hover:opacity-80`}
              onClick={toggleTheme}
            >
              {themeIcon}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
