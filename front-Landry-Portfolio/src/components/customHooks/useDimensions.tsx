import { useState, useEffect } from "react";

interface Dimensions {
  width: number;
  height: number;
}

const useDimensions = (): Dimensions => {
  const getCurrentDimension = (): Dimensions => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const [screenSize, setScreenSize] = useState<Dimensions>(
    getCurrentDimension()
  );

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  return screenSize;
};

export default useDimensions;
