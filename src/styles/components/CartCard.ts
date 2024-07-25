import styled from "styled-components";

export const CardBox = styled.div``;

export const Col1 = styled.div`
  display: grid;
  column-gap: 16px;
  grid-template-columns: auto 157px 1fr 1fr auto;
  grid-template-areas: "movieImg description quantity subtotal trash";
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "movieImg description trash"
      "movieImg quantity subtotal";
  }

  > img:nth-of-type(1) {
    grid-area: movieImg;
    width: 91px;
    height: 114px;
    gap: 0px;
    opacity: 0px;

    @media (max-width: 768px) {
      width: 64px;
      height: 82px;
      gap: 0px;
      opacity: 0px;
    }
  }

  div:nth-of-type(1) {
    grid-area: description;
    color: ${({ theme }) => theme.textPrimary};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    row-gap: 8px;

    h3 {
      font-size: 14px;
      font-weight: 700;
      line-height: 19.07px;
      text-align: left;
    }

    p {
      font-size: 16px;
      font-weight: 700;
      line-height: 21.79px;
      text-align: left;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;

export const Col2 = styled.div`
  grid-area: quantity;
  align-items: center;
  column-gap: 11px;
  justify-content: left;
  display: flex;

  img {
    cursor: pointer;
    height: 18px !important;
    opacity: 0px;
    width: 18px;
  }

  > div:nth-of-type(1) {
    align-items: center;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 4px;
    color: ${({ theme }) => theme.textPrimary};
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    height: 26px;
    line-height: 19.07px;
    opacity: 0px;
    text-align: center;
    width: 62px;
  }
`;

export const Col3 = styled.p`
  align-self: center;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 16px;
  font-weight: 700;
  grid-area: subtotal;
  line-height: 21.79px;

  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 16px 0 0;
  }

  span {
    display: none;
    color: ${({ theme }) => theme.textSecondary};
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.34px;
    text-align: left;

    @media (max-width: 768px) {
      display: initial;
    }
  }
`;

export const Col4 = styled.div`
  align-self: center;
  grid-area: trash;

  @media (max-width: 768px) {
    display: grid;
    column-gap: 16px;
    grid-template-columns: auto auto;
  }

  p {
    display: none;
    font-size: 16px;
    font-weight: 700;
    line-height: 21.79px;
    text-align: left;
    color: ${({ theme }) => theme.textPrimary};

    @media (max-width: 768px) {
      display: grid;
    }
  }

  img {
    cursor: pointer;
    height: 18px;
    width: 18px;
  }
`;
