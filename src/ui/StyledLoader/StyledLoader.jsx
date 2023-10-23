import { Dna } from 'react-loader-spinner';
import * as S from './StyledLoader.styled';

const StyledLoader = () => {
  return (
    <S.Container>
      <Dna
        visible={true}
        height="300"
        width="300"
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </S.Container>
  );
};

export default StyledLoader;
