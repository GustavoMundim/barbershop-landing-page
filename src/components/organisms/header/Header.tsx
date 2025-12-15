import {
  useHeaderContext,
  type TabProps,
} from "../../../context/HeaderContext";
import * as S from "./Header.styles";

export const Header = () => {
  const { setTab } = useHeaderContext();

  const tabsList: { tab: TabProps; label: string }[] = [
    { tab: "services", label: "Serviços" },
    { tab: "pictures", label: "Fotos  " },
    { tab: "map", label: "Localização" },
    { tab: "contact", label: "Contato" },
  ];

  function toggleTab(element: TabProps) {
    setTab(element);
  }

  return (
    <S.Container>
      {tabsList.map((tab) => (
        <h1 onClick={() => toggleTab(tab.tab)}>{tab.label}</h1>
      ))}
    </S.Container>
  );
};
