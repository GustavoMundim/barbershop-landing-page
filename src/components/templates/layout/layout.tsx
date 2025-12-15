import { type ReactNode } from "react";
import * as S from "../layout/layout.styles";
import { Section } from "../../molecules/section/section";
import { Flex } from "../../../styles/commonStyles";
import { useSectionSize } from "./hooks/useSectionSize";

type LayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export const Layout = ({ children, title, subtitle }: LayoutProps) => {
  const { height } = useSectionSize();
  return (
    <S.Container>
      <Section height={height} picture="barbershop.png">
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
