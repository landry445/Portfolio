import { useStateContext } from "../../context/ContextProvider"
import CloseIcon from "../icons/CloseIcon"
import ErrorIcon from "../icons/ErrorIcon"

interface SendErrorToastProps {
  setToast: (toast: string) => void;
}

const SendErrorToast = ({ setToast }: SendErrorToastProps) => {

  const {themeStyle} = useStateContext();

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
          <ErrorIcon />
          <span 
            className="sr-only">Check icon</span>
      </div>
      <div 
        className="
          ms-3 
          me-8
          text-sm 
          font-normal"
        >
          Erreur lors de l'envoi
      </div>
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
          onClick={ () => setToast('') }
        >
          <span className="sr-only">Close</span>
          <CloseIcon />
      </button>
    </div>
  )
}

export default SendErrorToast