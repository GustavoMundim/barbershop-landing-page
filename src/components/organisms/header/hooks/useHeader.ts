import { useState } from "react";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import {
  useHeaderContext,
  type TabProps,
} from "../../../../context/HeaderContext";

export const useHeader = () => {
  const { setTab } = useHeaderContext();
  const { size } = useWindowSize();

  const width = size.width || window.innerWidth;
  const isMobile = width <= 720;

  const [isExpanded, setIsExpanded] = useState(false);
  const shouldExpandLayout = isMobile ? isExpanded : true;

  const tabsList: { tab: TabProps; label: string }[] = [
    { tab: "services", label: "Serviços" },
    { tab: "pictures", label: "Fotos" },
    { tab: "map", label: "Localização" },
    { tab: "contact", label: "Contato" },
  ];

  function toggleTab(element: TabProps) {
    setTab(element);
    if (isMobile) setIsExpanded(false);
  }
  return {
    toggleTab,
    tabsList,
    setIsExpanded,
    shouldExpandLayout,
    isMobile,
    isExpanded,
  };
};
