import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

export type TabProps = "services" | "pictures" | "map" | "contact";

type Props = {
  setTab: Dispatch<SetStateAction<TabProps>>;
  tab: TabProps;
};

const HeaderContext = createContext({} as Props);

type ProviderProps = {
  children: ReactNode;
};

export const HeaderContextProvider = ({ children }: ProviderProps) => {
  const [tab, setTab] = useState<TabProps>("services");

  return (
    <HeaderContext.Provider value={{ tab, setTab }}>
      {children}
    </HeaderContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHeaderContext = () => useContext(HeaderContext);
