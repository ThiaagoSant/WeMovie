import styled from "styled-components";

export const Box = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  width: 338px;
  padding: 16px;
  gap: 16px;
  border-radius: 4px;
  opacity: 0px;

  @media (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 147px;
    height: 188px;
    gap: 0px;
    opacity: 0px;
  }

  h3 {
    color: ${({ theme }) => theme.textBlack};
    font-size: 12px;
    font-weight: 700;
    line-height: 16.34px;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.textPrimary};
    font-size: 16px;
    font-weight: 700;
    line-height: 21.79px;
    text-align: center;
  }

  button {
    div {
      align-items: center;
      display: flex;
      justify-content: center;
      column-gap: 4px;

      img {
        width: 13px;
        height: 13px;
      }

      span {
        font-size: 12px;
        font-weight: 400;
        line-height: 16.34px;
        text-align: center;
      }
    }

    p {
      color: ${({ theme }) => theme.white};
      font-size: 12px;
      font-weight: 700;
      line-height: 16.34px;
      text-align: center;
    }
  }
`;
