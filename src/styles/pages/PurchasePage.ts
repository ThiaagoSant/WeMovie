import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  > div {
    align-items: center;
    color: ${({ theme }) => theme.textPrimary};
    background: ${({ theme }) => theme.white};
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    max-width: 1048px;
    padding: 64px;
    width: 100%;

    > h1 {
      font-size: 20px;
      font-weight: 700;
      line-height: 27.24px;
      text-align: center;
    }
  }
`;
export const PurchaseImg = styled.img`
  width: 294.96px;
  height: 307px;
`;

export const PurchaseButton = styled.div`
  max-width: 10.8125rem;
  width: 100%;
  height: 40px;
`;
