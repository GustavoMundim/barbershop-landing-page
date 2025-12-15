import styled, { css } from "styled-components";

export const Container = styled.section<{
  $height: string;
  $picture?: string;
}>`
  ${({ $height, $picture }) => css`
    width: 100%;
    height: ${$height};
    background-image: url(${$picture});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  `}
`;
