import { useStateContext } from "../context/ContextProvider"

export default function Home() {

  const {themeStyle} = useStateContext();

  return (
    <div id="home" className="home-page relative min-h-screen">
      <div className={`absolute inset-0 ${themeStyle.bgPhoto} bg-cover bg-center bg-no-repeat `}></div>

      <div className="relative z-10 flex justify-center items-center min-h-screen text-white px-6">
        <div className="grid grid-cols-1 items-center w-full max-w-7xl">
          <div className="flex flex-col items-start space-y-4 text-center md:text-left">
            <h1 className="text-7xl font-bold w-full">
              <span className={`${themeStyle.textTertiary}`}>Landry DUPONT</span>
            </h1>
            <h2 className={`text-3xl font-semibold ${themeStyle.textTertiary}`}>DÉVELOPPEUR FULLSTACK</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
