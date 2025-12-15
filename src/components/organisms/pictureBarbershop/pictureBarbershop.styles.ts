import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 150px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  mask-position: center;
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: 720px) {
    width: 250px;
    height: 250px;
  }

  @media screen and (min-width: 1200px) {
    mask-image: url("mask.png");
    width: 450px;
    height: 350px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
