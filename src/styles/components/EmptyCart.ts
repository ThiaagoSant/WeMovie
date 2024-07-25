import { Link } from "react-router-dom";
import styled from "styled-components";

import cartEmptyImgDesktop from "../../assets/imgs/cart-empty-desktop.svg";
import cartEmptyImgMobile from "../../assets/imgs/cart-empty-mobile.svg";

export const Container = styled.div`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 1048px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    padding: 64px;

    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.textPrimary};
    border-radius: 4px;

    > h1 {
      font-size: 20px;
      font-weight: 700;
      line-height: 27.24px;
      text-align: center;
    }
  }
`;
export const CartEmptyImg = styled.div`
  background: url(${cartEmptyImgMobile}) no-repeat center;
  height: 265px;
  max-width: 447px;
  width: 100%;

  @media (min-width: 768px) {
    background: url(${cartEmptyImgDesktop}) no-repeat center;
  }
`;
export const ButtonEmptyCart = styled(Link)`
  align-items: center;
  background: ${({ theme }) => theme.primary};
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.white};
  display: flex;
  font-size: 12px;
  font-weight: 700;
  height: 40px;
  justify-content: center;
  line-height: 16.34px;
  max-width: 173px;
  text-align: center;
  width: 100%;
`;
