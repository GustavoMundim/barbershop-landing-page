import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 90px;
  z-index: 30 !important;
  background: linear-gradient(160deg, #1c120c, #241810ff, #0f0905);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: fixed;
  display: flex;
  border-bottom: #1c120c solid rgba(36, 82, 74, 0.65);
  align-items: center;
  gap: 50px;
  padding: 0px 30px;
  justify-content: end;
  z-index: 20;

  h1 {
    color: #fff;
    font-size: 1.8rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 800;
    transition: all 0.5s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
