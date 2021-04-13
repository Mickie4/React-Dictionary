import styled from "styled-components";
export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-top: 15px;
`;

export const StyledCol = styled.div`
  position: relative;
  width: 33.33%;
  padding-right: 15px;
  padding-left: 15px;
  @media (max-width: 425px) {
    width: 100%;
    text-align: center;
  }
`;

export const ImageGrid = styled.img`
  border-radius: 16px;
  padding: 10px;
  max-width: 100%;
  height: auto;
  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Section = styled.div`
  background: rgb(234, 239, 255);
  background: ${({ theme }) => theme.section.background};
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
  border: 1px solid ${({ theme }) => theme.section.border};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
`;

export const StyledContainer = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const GridContainer = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }

  @media (max-width: 767px) {
    margin: 0 auto;
  }
`;
