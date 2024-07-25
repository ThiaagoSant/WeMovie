import styled from "styled-components";

interface ButtonProps {
  variant: "primary" | "success";
}
export const Button = styled.button<ButtonProps>`
  align-items: center;
  display: flex;
  justify-content: center;
  background: ${({ theme, variant }) => theme[variant]};
  color: ${({ theme }) => theme.white};
  height: 40px;
  column-gap: 12px;
  width: 100%;
  border-radius: 4px;
  transition: all 0.3s ease;
`;
