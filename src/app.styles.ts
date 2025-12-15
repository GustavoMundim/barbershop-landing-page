import styled, { css } from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #171d25;
  overflow: hidden;
  background-attachment: local;
`;

export const Overlay = styled.div<{ rgba?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${(props) => props.rgba};
`;

export const Section = styled.section<{ isBackground?: boolean }>`
  ${({ isBackground }) => css`
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    ${isBackground &&
    css`
      background-image: url("barbershop.png");
    `};
    background-position: center;
    background-size: cover;

    background-attachment: fixed;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`;

export const WrapperText = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;

  h1 {
    font-size: 3rem;
  }
  h1,
  p {
    color: #ffff;
    text-align: center;
  }

  p {
    font-size: 1.5rem;
  }
`;

export const Pictures = styled.div`
  width: 100%;
  height: 500px;
  background-image: url("wallpaper2.jpg");
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

export const PictureBarbershopWrapper = styled.section`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
`;

export const Services = styled.div`
  width: 100%;
  height: 350px;
  border-top: 2px solid rgba(36, 82, 74, 0.65);
  border-bottom: 2px solid rgba(36, 82, 74, 0.65);
  background: #ffffffff;
  padding: 10px 0px;

  h1 {
    text-align: center;
    font-size: 2.3rem;
    text-transform: uppercase;
    font-weight: 800;
    margin-bottom: 30px;
  }
`;

export const WrapperServices = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0px 500px;
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
