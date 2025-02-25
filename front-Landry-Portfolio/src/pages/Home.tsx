import { useStateContext } from "../context/ContextProvider";

export default function Home() {
  const { themeStyle } = useStateContext();

  return (
    <div
      id="home"
      className={`
         home-page
         relative
         min-h-screen`}
    >
      <div
        className={`
          absolute
           inset-0
           ${themeStyle.bgPhoto}
           bg-cover
           bg-center
           bg-no-repeat`}
      ></div>

      <div
        className={`
           relative
           z-10
           flex
           justify-center
           items-center
           min-h-screen
           text-white
          `}
      >
        <div
          className={`
            flex
            flex-col
            justify-center
            items-center
            text-center
            space-y-4
            mb-[312px]`}
        >
          <h1
            className={`
               text-7xl
               font-bold
               px-6
               py-2
               inline-block`}
          >
            <span className={`${themeStyle.textfourth}`}>Landry DUPONT</span>
          </h1>

          <h2
            className={`text-3xl
               font-semibold
               ${themeStyle.textTertiary}
               px-4
               py-2
               inline-block`}
          >
            DÉVELOPPEUR WEB FULLSTACK
          </h2>
        </div>
      </div>
    </div>
  );
}
