interface StyleProps {
    width?: number;
    height?: number;
    fill?: string;
    opacity?: number;
  }
  
  interface DallEIconProps {
    style?: StyleProps;
  }
  
  const DallEIcon: React.FC<DallEIconProps> = ({ style = {}}) => {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={style.width}
        height={style.height}
        fill={style.fill} 
        className={style.opacity?.toString()} 
        viewBox="0 0 24 24"
      >
       <path d="M0 10h4.8v5H0z" opacity=".08"/>
       <path d="M4.8 10h4.8v5H4.8z" opacity=".2"/>
       <path d="M9.6 10h4.8v5H9.6z" opacity=".3"/>
       <path d="M14.4 10h4.8v5h-4.8z" opacity=".5"/>
       <path d="M19.2 10H24v5h-4.8z" opacity=".6"/>
      </svg>
    )
  }
  
  export default DallEIcon;