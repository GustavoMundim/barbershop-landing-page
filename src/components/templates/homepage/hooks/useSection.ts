import { useEffect, useRef } from "react";
import { useHeaderContext } from "../../../../context/HeaderContext";

type SectionKey = "services" | "pictures" | "map" | "contact";

export const useSection = () => {
  const { tab } = useHeaderContext();

  const sectionsRef = useRef<Record<SectionKey, HTMLDivElement | null>>({
    services: null,
    pictures: null,
    map: null,
    contact: null,
  });

  useEffect(() => {
    sectionsRef.current[tab]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [tab]);
  return { sectionsRef };
};
