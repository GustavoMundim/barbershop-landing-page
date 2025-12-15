import * as S from "./pictureBarbershop.styles";

export const PictureBarbershop = ({ data }: { data: string[] }) => {
  return (
    <>
      {data.map((image) => (
        <S.Container>
          <img src={`${image}.png`} alt="" />
          <div className="overlay"></div>
        </S.Container>
      ))}
    </>
  );
};
