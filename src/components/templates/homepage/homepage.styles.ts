import styled, { css, type CSSProperties } from "styled-components";

export const defaultStyleInline = {
  pictureText: {
    color: "white",
    marginTop: 90,
    zIndex: 20,
    fontSize: 50,
  } satisfies CSSProperties,
};

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #171d25;
  overflow: hidden;
  background-attachment: local;
`;

export const Overlay = styled.div<{ $rgba?: string }>`
  ${({ $rgba }) => css`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${$rgba};
  `}
`;

export const WrapperText = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;

  h1,
  p {
    color: #ffff;
    text-align: center;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }
`;

export const Pictures = styled.section`
  width: 100%;
  height: 500px;
  background-image: url("wallpaperPicture.jpg");
  background-position: center;
  position: relative;
  background-size: cover;

  h1 {
    text-align: center;
    color: #fff;
    margin-top: 30px;
    position: absolute;
    left: 48%;
    z-index: 20;
  }
`;

export const PictureBarbershopWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
`;

export const WrapperServices = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 80px 500px;
  align-items: center;

  h1 {
    color: #171d25;
    text-align: center;
    margin-top: 10px;
    text-transform: uppercase;
    font-size: 1.9rem;
  }
`;

export const ContactWrapper = styled.div`
  width: 100%;
  height: 200px;

  border-top: 1px solid #fff;
  display: flex;

  justify-content: center;
  background: rgba(0, 0, 0, 0.15);
  align-items: center;
`;

export const WrapperWhatsaapInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  h1 {
    color: #fff;
    font-size: 3rem;
  }
`;
