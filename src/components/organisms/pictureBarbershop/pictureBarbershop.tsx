import * as S from "./pictureBarbershop.styles";

export const PictureBarbershop = ({ data }: { data: string[] }) => {
  return (
    <>
      {data.map((image, index) => (
        <S.Container key={index}>
          <img src={`${image}.png`} alt="" />
          <div className="overlay"></div>
        </S.Container>
      ))}
    </>
  );
};
