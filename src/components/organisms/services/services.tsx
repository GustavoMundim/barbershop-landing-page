import { Icon } from "@iconify/react";
import * as S from "./services.styles";
export const Services = ({
  data,
}: {
  data: { ico: string; title: string }[];
}) => {
  return (
    <>
      {data.map((label) => (
        <S.Info>
          <S.Dot>
            <Icon className="icos" color="white" icon={label.ico} />
          </S.Dot>
          <h1>{label.title}</h1>
        </S.Info>
      ))}
    </>
  );
};
