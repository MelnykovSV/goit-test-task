import * as S from './SearchForm.styled';
import { useNavigate } from 'react-router';
import { generateQueryString } from '../../helpers';
import { useSearchParams } from 'react-router-dom';
import { StyledSelect, BrandStyledSelect } from '../../ui';
import { makes, prices } from '../../constants';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { StyledButton } from '../../ui';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { resetCurrentPage } from '../../redux/favoriteCars/carsSlice';
import { toast } from 'react-toastify';

const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, '');

export const SearchForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const make = searchParams.get('make');
  const rentalPrice = searchParams.get('rentalPrice');
  const minMileage = searchParams.get('minMileage');
  const maxMileage = searchParams.get('maxMileage');

  const [currentBrandValue, setCurrentBrandValue] = useState(make);
  const [currentRentalPriceValue, setCurrentRentalPriceValue] =
    useState(rentalPrice);
  const [currentMinMileageValue, setCurrentMinMileageValue] =
    useState(minMileage);
  const [currentMaxMileageValue, setCurrentMaxMileageValue] =
    useState(maxMileage);

  const submitHandler = e => {
    e.preventDefault();
    if (
      make === currentBrandValue &&
      rentalPrice === currentRentalPriceValue &&
      minMileage === currentMinMileageValue &&
      maxMileage === currentMaxMileageValue
    ) {
      return;
    }

    if (minMileage && maxMileage && maxMileage <= minMileage) {
      toast.warning('Max mileage has to be greater then min mileage');
      return;
    }

    const queryString = generateQueryString({
      make: currentBrandValue,
      rentalPrice: currentRentalPriceValue,
      minMileage: currentMinMileageValue,
      maxMileage: currentMaxMileageValue,
    });
    dispatch(resetCurrentPage());

    navigate(queryString ? `?${queryString}` : '');
  };

  const brandChangeHandler = value => {
    setCurrentBrandValue(value);
  };
  const rentalPriceChangeHandler = value => {
    setCurrentRentalPriceValue(value);
  };
  const minMileageChangeHandler = value => {
    setCurrentMinMileageValue(removeNonNumeric(value));
  };
  const maxMileageChangeHandler = value => {
    setCurrentMaxMileageValue(removeNonNumeric(value));
  };

  return (
    <S.Container onSubmit={submitHandler}>
      <div className="search-form-outer-block">
        <div className="search-form-block">
          <label htmlFor="brands-select" className="label">
            Car brand
          </label>
          <BrandStyledSelect
            value={currentBrandValue}
            options={makes}
            id="brands-select"
            placeholder="Enter the text"
            changeHandler={brandChangeHandler}
          />
        </div>
        <div className="search-form-block">
          <label htmlFor="rental-price-select" className="label">
            Price/ 1 hour
          </label>
          <StyledSelect
            options={prices}
            id="rental-price-select"
            placeholder={''}
            className={'select'}
            adornments={true}
            name="rentalPrice"
            value={currentRentalPriceValue}
            changeHandler={rentalPriceChangeHandler}
          />
        </div>
      </div>
      <div className="search-form-outer-block">
        <div className="search-form-block">
          <label htmlFor="min-mileage-input" className="label">
            Сar mileage / km
          </label>
          <div className="paired-inputs-container">
            <TextField
              className="textfield textfield-from"
              id="min-mileage-input"
              name="minMileage"
              value={
                currentMinMileageValue ? addCommas(currentMinMileageValue) : ''
              }
              onChange={e => {
                minMileageChangeHandler(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">From</InputAdornment>
                ),
              }}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9,]*' }}
              label=""
              variant="outlined"
            />
            <TextField
              className="textfield textfield-to"
              id="max-mileage-input"
              name="maxMileage"
              value={
                currentMaxMileageValue ? addCommas(currentMaxMileageValue) : ''
              }
              onChange={e => {
                maxMileageChangeHandler(e.target.value);
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">To</InputAdornment>
                ),
              }}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9,]*' }}
              label=""
              variant="outlined"
            />
          </div>
        </div>
        <StyledButton
          sx={{ width: 125 }}
          className="button-submit"
          type="submit"
        >
          Search
        </StyledButton>
      </div>
    </S.Container>
  );
};
