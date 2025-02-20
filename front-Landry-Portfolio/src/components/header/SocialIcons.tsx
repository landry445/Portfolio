import React from 'react';
import GitHubIcon from '../icons/GitHubIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import MailIcon from '../icons/MailIcon';

type SocialIconsProps = {
  themeStyle: {
    svgTertiary: string;
    textTertiary: string;
    hover: {
      textColor: string;
    };
  };
};

const SocialIcons: React.FC<SocialIconsProps> = ({ themeStyle }) => {
  const iconStyle = {
    width: 30,
    height: 30,
    fill: themeStyle.svgTertiary,
    opacity: 'opacity-100'
  };

  return (
    <div className="flex justify-center space-x-4 mb-6">
      <a href="https://github.com/landry445" target="_blank" rel="noopener noreferrer" className={`${themeStyle.textTertiary} ${themeStyle.hover.textColor}`}>
        <GitHubIcon style={iconStyle} />
      </a>
      <a href="https://www.linkedin.com/in/landry-dupont" target="_blank" rel="noopener noreferrer" className={`${themeStyle.textTertiary} ${themeStyle.hover.textColor}`}>
        <LinkedInIcon style={iconStyle} />
      </a>
      <a href="mailto: landrydupont790@gmail.com" className={`${themeStyle.textTertiary} ${themeStyle.hover.textColor}`}>
        <MailIcon style={iconStyle} />
      </a>
    </div>
  );
};

export default SocialIcons;
