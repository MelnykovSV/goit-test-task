import styled from '@emotion/styled';

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 50px;
  margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    justify-content: start;
    column-gap: 70px;
    width: 618px;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1440px) {
    width: 1183px;
    column-gap: 29px;
  }
`;
