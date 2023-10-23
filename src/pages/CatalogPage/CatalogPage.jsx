import * as S from './CatalogPage.styled';
import { Outlet } from 'react-router';
import { SearchForm } from '../../components';

const CatalogPage = () => {
  return (
    <S.Container className="container">
      <SearchForm />
      <Outlet />
    </S.Container>
  );
};

export default CatalogPage;
