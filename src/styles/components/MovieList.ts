import styled from "styled-components";

export const ListContent = styled.div`
  align-items: center;
  column-gap: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1080px;
  padding: 0 16px;
  row-gap: 24px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;
