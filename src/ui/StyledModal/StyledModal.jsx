import * as S from './StyledModal.styled';

export const StyledModal = ({ children, ...props }) => {
  return <S.Container {...props}>{children}</S.Container>;
};
