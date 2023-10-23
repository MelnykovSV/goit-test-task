import styled from '@emotion/styled';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: start;
  justify-content: center;
  margin-bottom: 44px;
  gap: 18px;

  .search-form-outer-block {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 18px;
    &:last-of-type {
      align-items: center;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: center;

    .search-form-outer-block {
      flex-direction: row;
      &:first-of-type {
      }
      &:last-of-type {
        align-items: end;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    align-items: end;
    .search-form-outer-block {
      &:first-of-type {
        gap: 18px;
      }
    }
  }

  .MuiInputBase-adornedStart {
    padding-left: 18px;
  }
  .MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot {
    padding-right: 30px;
  }
  .MuiAutocomplete-input.MuiInputBase-inputAdornedStart {
    padding-left: 0;
  }
  .MuiInputBase-fullWidth {
    padding-left: 18px;
  }
  .MuiOutlinedInput-input {
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: #121417;
  }
  .MuiTypography-root {
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    color: #121417;
  }

  .search-form-block {
    .label {
      display: block;
      color: ${({ theme }) => theme.textLightSecondary};
      font-family: 'Manrope';
      font-size: 14px;
      font-weight: 500;
      line-height: calc(18 / 14);
      margin-bottom: 8px;
    }
    .paired-inputs-container {
      display: flex;
      width: 280px;
      @media screen and (min-width: 768px) {
        width: 320px;
      }

      .MuiInputBase-adornedStart {
        padding-left: 24px;
      }

      .textfield-from fieldset {
        border-radius: 14px 0 0 14px;
      }

      .textfield-to fieldset {
        border-radius: 0 14px 14px 0;
      }
      .textfield {
        width: 140px;
        background: #f7f7fb;
        @media screen and (min-width: 768px) {
          width: 160px;
        }
      }
    }
    .select {
      width: 125px;
    }
  }
  .MuiButton-containedSizeMedium.MuiButton-containedPrimary {
    width: 136px !important;
  }
`;
