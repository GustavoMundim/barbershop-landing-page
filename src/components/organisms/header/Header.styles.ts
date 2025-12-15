import styled, { css } from "styled-components";

export const Container = styled.header<{
  $isExpanded?: boolean;
  $isMobile?: boolean;
}>`
  ${({ $isExpanded, $isMobile }) => css`
    width: 100%;
    height: ${$isExpanded && $isMobile ? 400 : 80}px;

    z-index: 30 !important;
    background: linear-gradient(160deg, #1c120c, #241810ff, #0f0905);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    position: fixed;

    border-bottom: #1c120c solid rgba(36, 82, 74, 0.65);
    gap: 50px;
    padding: 0px 30px;

    z-index: 20;
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
    justify-content: ${
      $isExpanded && $isMobile
        ? "center"
        : $isMobile
        ? "flex-start"
        : "flex-end"
    };
    flex-direction: ${$isExpanded && $isMobile ? "column" : "none"};
  }

    
    .tabs {
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

    .svg {
      position: relative;
      left: 0;
      top: 0;
    
  `}
`;
