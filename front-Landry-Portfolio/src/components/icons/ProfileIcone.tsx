import { useStateContext } from "../../context/ContextProvider";

interface ProfileIconProps {
  size: number;
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ size }) => {
  const { theme } = useStateContext();

  return (
    <img 
      className="rounded-[17%]" 
      width={size} 
      height={size} 
      src={theme === "Dark" ? "/img/photo-Landry.png" : "/img/profile-light.png"} 
      alt="Profile" 
    />
  );
};

export default ProfileIcon;
