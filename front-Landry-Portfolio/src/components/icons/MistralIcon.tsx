interface StyleProps {
    width?: number;
    height?: number;
    fill?: string;
    opacity?: number;
  }
  
  interface MistralIconProps {
    style?: StyleProps;
  }
  
  const MistralIcon: React.FC<MistralIconProps> = ({ style = {}}) => {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={style.width}
        height={style.height}
        fill={style.fill} 
        className={style.opacity?.toString()} 
        viewBox="0 0 26 26"
        >
          <path xmlns="http://www.w3.org/2000/svg" d="M15 6v4h-2V6h2zm4-4v4h-2V2h2zM3 2H1h2zM1 2h2v20H1V2zm8 12h2v4H9v-4zm8 0h2v8h-2v-8z"/>
          <path xmlns="http://www.w3.org/2000/svg" d="M19 2h4v4h-4V2zM3 2h4v4H3V2z" opacity=".4"/>
          <path xmlns="http://www.w3.org/2000/svg" d="M15 10V6h8v4h-8zM3 10V6h8v4H3z" opacity=".5"/>
          <path xmlns="http://www.w3.org/2000/svg" d="M3 14v-4h20v4z" opacity=".6"/>
          <path xmlns="http://www.w3.org/2000/svg" d="M11 14h4v4h-4v-4zm8 0h4v4h-4v-4zM3 14h4v4H3v-4z" opacity=".7"/>
          <path xmlns="http://www.w3.org/2000/svg" d="M19 18h4v4h-4v-4zM3 18h4v4H3v-4z" opacity=".8"/>
        
      </svg>
    )
  }
  
  export default MistralIcon;