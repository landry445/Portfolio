import { useStateContext } from "../../context/ContextProvider";

type ProfileIconProps = {
  size: string;
};

const ProfileIcon: React.FC<ProfileIconProps> = ({ size }) => {
  const { theme } = useStateContext();

  return (
    <img 
      className="rounded-[17%]"      
      width={size} 
      height={size} 
      src={theme === "Dark" ? "/photo-Landry.png" : "/img/profile-light.png"} 
      alt="profile" 
    />
  );
};

export default ProfileIcon;