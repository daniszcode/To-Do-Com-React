import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  background: linear-gradient(
    90deg,
    rgba(255, 196, 0, 1) 12%,
    rgba(255, 223, 43, 1) 56%,
    rgba(255, 246, 43, 1) 77%
  );
`;

export const Box = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  list-style: none;
  text-decoration: none;
`;

export const Option = styled.li`
  text-decoration: none;
  list-style: none;
  color: tomato;
  font-size: 20pt;
  font-weight: bold;
  font-family: monospace;
`;

export const Ancor = styled.a`
  text-decoration: none;
  list-style: none;
  color: inherit;
  &:hover {
    background-color: rgba(255, 196, 0, 1);
  }
`;
