import * as S from './StyledButton.styled';

export const StyledButton = ({ children, ...props }) => {
  return (
    <S.Container variant="contained" {...props}>
      {children}
    </S.Container>
  );
};
