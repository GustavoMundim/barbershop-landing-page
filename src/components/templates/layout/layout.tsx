import { type ReactNode } from "react";
import * as S from "../layout/layout.styles";
import { Section } from "../../molecules/section/section";
import { Flex } from "../../../styles/commonStyles";
import { useWindowSize } from "../../../../hooks/useWindowSize";

type LayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export const Layout = ({ children, title, subtitle }: LayoutProps) => {
  const { size } = useWindowSize();
  const screenY = screenSizeConfig(size.width);

  function screenSizeConfig(size: number): string {
    if (size >= 300 && size <= 992) {
      return "400px";
    } else {
      return "700px";
    }
  }

  return (
    <S.Container>
      <Section height={screenY} picture="barbershop.png">
        <Flex $display="flex">
          <S.Overlay rgba="rgba(36, 82, 74, 0.65)" />
          <S.WrapperText>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </S.WrapperText>
        </Flex>
      </Section>
      {children}
    </S.Container>
  );
};
