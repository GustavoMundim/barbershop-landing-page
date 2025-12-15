import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  height: 350px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
  mask-image: url("mask.png");
  mask-position: center;

  border-radius: 16px;
  overflow: hidden;
  position: relative;
  background: #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
