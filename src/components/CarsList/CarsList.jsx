import * as S from './CarsList.styled';
import { CarsListItem } from '../CarsListItem/CarsListItem';

export const CarsList = ({ cars }) => {
  return (
    <S.Container>
      {cars.map(car => (
        <CarsListItem car={car} key={car.id} />
      ))}
    </S.Container>
  );
};
