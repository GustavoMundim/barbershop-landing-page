import { useWindowSize } from "../../../../../hooks/useWindowSize";

export type ScreenHeightConfig = {
  services: string;
  pictures: string;
  map: string;
  contact: string;
};

export const useScreenSizeConfig = () => {
  const { size } = useWindowSize();
  const screenY = screenSizeConfig(size.width);

  function screenSizeConfig(size: number): ScreenHeightConfig {
    if (size >= 340 && size <= 600) {
      return {
        services: "350px",
        pictures: "300px",
        map: "300px",
        contact: "200px",
      };
    }

    if (size >= 600 && size <= 1200) {
      return {
        services: "400px",
        pictures: "500px",
        map: "400px",
        contact: "200px",
      };
    } else {
      return {
        services: "600px",
        pictures: "800px",
        map: "800px",
        contact: "300px",
      };
    }
  }
  return { screenY };
};
