import { createContext, useContext, useState, ReactNode } from "react";

type ThemeStyle = {
  bgColor: string;
  bgSecondary: string;
  bgTertiary: string;
  bgCard: string;
  bgForm: string;
  bgPhoto: string;
  shadowColor: string;
  borderSecondary: string;
  textColor: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  textTechno: string;
  borderTertiary: string;
  svgColor: string;
  svgPrimary: string;
  svgSecondary: string;
  svgTertiary: string;
  svgTechno: string;
  hover: {
    bgColor: string;
    bgOpacity: string;
    textColor: string;
    borderColor: string;
  };
  focus: {
    borderColor: string;
    textColor: string;
  };
  gradientColor: string;
  gradientSecondary: string;
};

type StateContextType = {
  theme: string;
  sidebar: boolean;
  themeStyle: ThemeStyle;
  activeLink: string;
  setTheme: (theme: string) => void;
  setSideBar: (sidebar: boolean) => void;
  setActiveLink: (activeLink: string) => void;
};

const stateContext = createContext<StateContextType | undefined>(undefined);

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("Dark");
  const [sidebar, setSideBar] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("Home");

  const themeStyle: ThemeStyle = {
    bgColor: theme === "Dark" ? "bg-[#111111]" : "bg-[#FFFFFF]",
    bgSecondary: theme === "Dark" ? "bg-[#149489]" : "bg-cyan-700",
    bgTertiary: theme === "Dark" ? "bg-stone-50" : "bg-gray-400",
    bgCard: theme === "Dark" ? "bg-slate-900" : "bg-zinc-50",
    bgForm: theme === "Dark" ? "bg-[#171717]" : "bg-[#FFFFFF]",
    bgPhoto: theme === "Dark" ? "bg-[url('/setup.webp')] filter brightness-70" : "bg-[url('/setup-light.png')]",
    shadowColor: theme === "Dark" ? "shadow-slate-800" : "shadow-stone-200",
    borderSecondary: theme === "Dark" ? "border-blue-700" : "border-cyan-700",
    textColor: theme === "Dark" ? "text-blue-700" : "text-cyan-700",
    textPrimary: theme === "Dark" ? "text-slate-950" : "text-stone-50",
    textSecondary: theme === "Dark" ? "text-slate-950" : "text-stone-50",
    textTertiary: theme === "Dark" ? "text-stone-50" : "text-slate-500 bg-[#FFFFFF]/30",
    textTechno: "#1d4ed8",
    borderTertiary: theme === "Dark" ? "border-stone-50" : "border-slate-600",
    svgColor: theme === "Dark" ? "#1d4ed8" : "#0e7490",
    svgPrimary: theme === "Dark" ? "#020617" : "#fafaf9",
    svgSecondary: theme === "Dark" ? "#1d4ed8" : "#0e7490",
    svgTertiary: theme === "Dark" ? "#fafaf9" : "#475569",
    svgTechno: theme === "Dark" ? "#149489" : "#0e7490",
    hover: {
      bgColor: theme === "Dark" ? "hover:bg-slate-800" : "hover:bg-stone-200",
      bgOpacity: theme === "Dark" ? "hover:bg-opacity-90" : "hover:bg-opacity-80",
      textColor: theme === "Dark" ? "hover:text-[#12a89c]" : "hover:text-cyan-700",
      borderColor: theme === "Dark" ? "hover:border-stone-50" : "hover:border-slate-600",
    },
    focus: {
      borderColor: theme === "Dark" ? "focus:ring-blue-700" : "focus:ring-cyan-600",
      textColor: theme === "Dark" ? "peer-focus:text-blue-700" : "peer-focus:text-cyan-600 ",
    },
    gradientColor: theme === "Dark" ? 
      "bg-gradient-to-r from-[#117e75] to-[#1bd4c5]" : 
      "bg-gradient-to-r from-[#FFFFFF] to-[#ffffff00]",
    gradientSecondary: theme === "Dark" ? 
      "bg-gradient-to-r from-[#00000000] to-[#111111]" : 
      "bg-gradient-to-r from-[#ffffff00] to-[#FFFFFF]"
  };

  return (
    <stateContext.Provider value={{
      theme,
      sidebar,
      themeStyle,
      activeLink,
      setTheme,
      setSideBar,
      setActiveLink
    }}>
      {children}
    </stateContext.Provider>
  );
};
export const useStateContext = () => {
  const context = useContext(stateContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a ContextProvider");
  }
  return context;
};
