import type { ReactNode } from "react";
import * as S from "./section.styles";

type SectionProps = {
  height: string;
  children: ReactNode;
  picture?: string;
  classname?: string;
  sectionRef?: (el: HTMLDivElement | null) => void;
};

export const Section = ({
  children,
  height,
  picture,
  sectionRef,
  classname,
}: SectionProps) => {
  return (
    <S.Container
      $height={height}
      $picture={picture}
      className={classname}
      ref={sectionRef}
    >
      {children}
    </S.Container>
  );
};
