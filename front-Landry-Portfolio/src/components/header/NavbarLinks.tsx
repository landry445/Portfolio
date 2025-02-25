type NavbarLinksProps = {
  links: { label: string; href: string; icon?: React.ReactNode }[];
  themeStyle: { textTertiary: string; hover: { textColor: string } };
};

const NavbarLinks: React.FC<NavbarLinksProps> = ({ links, themeStyle }) => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="navbar-links flex flex-col">
      {links.map((link, index) => (
        <li key={index} className="py-3 border-t border-stone-700 text-center">
          <a
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleScroll(link.href.substring(1));
            }}
            className={`flex items-center transition-all duration-300 ${themeStyle.textTertiary} ${themeStyle.hover.textColor}`}
          >
            {link.icon && <span className="mr-2">{link.icon}</span>}
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
