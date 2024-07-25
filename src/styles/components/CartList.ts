import styled from "styled-components";

export const ListContainer = styled.section`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  width: 100%;

  main {
    background-color: ${({ theme }) => theme.white};
    border-radius: 4px;
    max-width: 1048px;
    padding: 24px;
    width: 100%;

    @media (max-width: 768px) {
      padding: 16px;
    }

    ul {
      display: grid;
      grid-template-columns: 280px 1fr 1fr 24px;

      @media (max-width: 768px) {
        display: none;
      }

      li {
        color: ${({ theme }) => theme.textSecondary};
        flex-grow: 2;
        font-size: 14px;
        font-weight: 700;
        line-height: 19.07px;
        list-style: none;
        text-align: left;
        text-transform: uppercase;
      }
    }

    footer {
      align-items: center;
      border-top: 1px solid ${({ theme }) => theme.border};
      display: flex;
      justify-content: space-between;
      padding-top: 24px;

      @media (max-width: 768px) {
        flex-direction: column-reverse;
        padding-top: 21px;
        row-gap: 16px;
        width: 100%;
      }

      button {
        border-radius: 4px;
        font-size: 12px;
        font-weight: 700;
        height: 34px;
        line-height: 16.34px;
        opacity: 0px;
        padding: 8px;
        text-align: center;
        text-transform: uppercase;
        width: 173px;

        @media (max-width: 768px) {
          font-size: 14px;
          font-weight: 700;
          height: 40px;
          line-height: 19.07px;
          text-align: center;
          width: 100%;
        }
      }
    }
  }
`;

export const ListContent = styled.div`
  padding: 24px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (max-width: 768px) {
    padding: 0 0 21px 0;
  }
`;

export const PriceContent = styled.div`
  align-items: center;
  column-gap: 28px;
  display: flex;
  @media (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }

  p {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-align: center;
    text-transform: uppercase;
  }

  span {
    color: ${({ theme }) => theme.textPrimary};
    font-size: 24px;
    font-weight: 700;
    line-height: 32.68px;
    text-align: center;
  }
`;
