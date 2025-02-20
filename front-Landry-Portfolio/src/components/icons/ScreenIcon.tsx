interface StyleProps {
  width?: number;
  height?: number;
  fill?: string;
  opacity?: number;
}

interface ScreenIconProps {
  style: StyleProps;
}

const ScreenIcon: React.FC<ScreenIconProps> = ({ style }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={style.width}
      height={style.height}
      fill={style.fill}
      className={style.opacity?.toString()}
      viewBox="0 0 16 16"
    >
      <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
      <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z"/>
    </svg>
  )
}

export default ScreenIcon;