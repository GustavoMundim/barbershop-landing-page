import styled, { css } from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background: #171d25;
  overflow: hidden;
  background-attachment: local;

  .section-services {
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
  }
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

export const Overlay = styled.div<{ rgba?: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${(props) => props.rgba};
`;

export const WrapperText = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;

  h1 {
    font-size: 5rem;
  }
  h1,
  p {
    color: #ffff;
    text-align: center;
  }

  p {
    font-size: 1.8rem;
  }
`;
