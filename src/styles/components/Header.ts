import styled from "styled-components";

export const Section = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Wrapper = styled.header`
  align-items: center;
  display: flex;
  height: 88px;
  justify-content: space-between;
  max-width: 1080px;
  padding: 0 16px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Logo = styled.p`
  cursor: pointer;
  font-family: "Open Sans";
  font-size: 20px;
  font-weight: 700;
  line-height: 27.24px;
  text-align: left;
`;

export const WrapperCart = styled.nav`
  align-items: center;
  column-gap: 8px;
  display: flex;
  cursor: pointer;

  div {
    align-items: flex-end;
    display: flex;
    flex-direction: column;

    p {
      font-size: 14px;
      font-weight: 600;
      line-height: 19.07px;
      @media (max-width: 768px) {
        display: none;
      }
    }

    span {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 12px;
      font-weight: 600;
      line-height: 16.34px;
      text-align: left;
    }
  }
`;
