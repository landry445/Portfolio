import { useStateContext } from "../../context/ContextProvider";

const NavbarHeader: React.FC = () => {
  const { theme } = useStateContext();
  return (
    <div className="flex justify-center mb-6">
      <img
        src={theme === "Dark" ? "/photo-Landry.png" : "/photo-Landry-light.png"}
        alt="logo"
        className="max-w-[100px] h-auto rounded-[20px]"
      />
    </div>
  );
};

export default NavbarHeader;
