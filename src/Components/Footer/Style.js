import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  background: linear-gradient(
    90deg,
    rgba(255, 196, 0, 1) 12%,
    rgba(255, 223, 43, 1) 56%,
    rgba(255, 246, 43, 1) 77%
  );
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const Image = styled.img`
  width: 15%;
  height: 15%;
`;

export const Text = styled.h2`
  font-size: 2rem;
  align-items: center;
  padding: 50px 5px;
  font-weight: bold;
  font-family: monospace;
  color: tomato;
`;
