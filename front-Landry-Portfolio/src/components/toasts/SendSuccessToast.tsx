import { useStateContext } from "../../context/ContextProvider";
import CloseIcon from "../icons/CloseIcon";
import MessageIcon from "../icons/MessageIcon";

interface SendSuccessToastProps {
  setToast: (toast: string) => void;
}

const SendSuccessToast = ({ setToast }: SendSuccessToastProps) => {
  const { themeStyle } = useStateContext();

  const iconStyle = {
    width: 18,
    height: 18,
    fill: themeStyle.svgTertiary,
    opacity: "opacity-100",
  };

  return (
    <div
      className={`
        z-50
        flex 
        items-center 
        w-full 
        py-2 
        ps-2
        pe-3
        mb-4 
        border
        border-opacity-20
        ${themeStyle.textTertiary}
        ${themeStyle.borderTertiary}
        rounded-2xl 
      `}
      role="alert"
    >
      <div
        className={`
          inline-flex 
          items-center 
          justify-center 
          flex-shrink-0 
          w-8 
          h-5
          border-r
          border-opacity-20
          ${themeStyle.borderTertiary}
        `}
      >
        <MessageIcon style={iconStyle} />
        <span className="sr-only">Check icon</span>
      </div>
      <div className="ms-3 me-8 text-sm font-normal">Message envoyé</div>
      <button
        type="button"
        className="
          ms-auto 
          -mx-1.5 
          -my-1.5 
          rounded-lg 
          inline-flex 
          items-center 
          justify-center 
          h-8 
          w-8
        "
        aria-label="Close"
        onClick={() => setToast("")}
      >
        <span className="sr-only">Close</span>
        <CloseIcon />
      </button>
    </div>
  );
};

export default SendSuccessToast;
