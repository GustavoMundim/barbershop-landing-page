import { Icon } from "@iconify/react";
import * as S from "./Header.styles";
import { useHeader } from "./hooks/useHeader";

export const Header = () => {
  const {
    shouldExpandLayout,
    tabsList,
    isMobile,
    isExpanded,
    setIsExpanded,
    toggleTab,
  } = useHeader();

  return (
    <S.Container $isExpanded={shouldExpandLayout} $isMobile={isMobile}>
      {isMobile && (
        <Icon
          icon={isExpanded ? "mdi:close" : "mdi:menu"}
          color="white"
          className="svg"
          fontSize={40}
          onClick={() => setIsExpanded((prev) => !prev)}
        />
      )}

      {(!isMobile || isExpanded) &&
        tabsList.map((tab) => (
          <h1 key={tab.tab} className="tabs" onClick={() => toggleTab(tab.tab)}>
            {tab.label}
          </h1>
        ))}
    </S.Container>
  );
};
