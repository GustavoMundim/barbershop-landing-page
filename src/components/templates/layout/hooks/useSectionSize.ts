import { useWindowSize } from "../../../../../hooks/useWindowSize";

type ScreenHeight = "300px" | "700px";

export const useSectionSize = () => {
  const { size } = useWindowSize();
  const width = size.width || window.innerWidth;
  const height = screenSizeConfig(width);

  function screenSizeConfig(size: number): ScreenHeight {
    if (size <= 720) {
      return "300px";
    }
    return "700px";
  }

  return {
    height,
  };
};
