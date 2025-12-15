import styled from "styled-components";

export const Info = styled.div`
  h1 {
    font-size: 30px !important;
  }
  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 40px !important;
    }
  }
`;

export const Dot = styled.div`
  width: 120px;
  height: 120px;
  background: #171d25;
  border: 5px solid rgba(36, 82, 74, 0.65);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 80%;

  .icos {
    font-size: 80px;
  }

  @media screen and (min-width: 720px) {
    width: 150px;
    height: 150px;
  }

  @media screen and (min-width: 992px) {
    width: 200px;
    height: 200px;

    .icos {
      font-size: 150px;
    }
  }
`;
