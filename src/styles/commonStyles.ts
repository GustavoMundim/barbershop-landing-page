import styled, { css } from "styled-components";

export type FlexStyledProps = {
  $display?: "flex" | "block";
  $justifyContent?:
    | "center"
    | "end"
    | "flex-start"
    | "flex-end"
    | "start"
    | "space-between"
    | "left"
    | "right";
  $alignItems?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "baseline"
    | "end";
  $gap?: number;
  $flexDirection?: "column";
  $padding?: number;
};

export const Flex = styled.div<FlexStyledProps>`
  ${({ ...props }) => css`
    display: ${props.$display || "block"};
    width: 100%;
    height: 100%;
    justify-content: ${props.$justifyContent || "center"};
    align-items: ${props.$alignItems || "center"};
    gap: ${props.$gap || 0}px;
    flex-direction: ${props.$flexDirection};
    padding: ${props.$padding}px;
  `}
`;
