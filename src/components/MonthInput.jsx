import React from 'react';
import PropTypes from 'prop-types';
import { checkMaxLength, checkIsNaN, checkRange } from '../util';
import { MAX_LENGTH, MIN_LENGTH, RANGE } from '../constants';
import Input from './Input';

function MonthInput({ value, name, updateCard }) {
  return (
    <Input
      placeholder="MM"
      length={MAX_LENGTH.DATE}
      minLength={MIN_LENGTH.MONTH}
      min={RANGE.MONTH_MIN}
      max={RANGE.MONTH_MAX}
      value={value}
      name={name}
      updateCard={updateCard}
      validators={{ checkMaxLength, checkIsNaN, checkRange }}
    />
  );
}

MonthInput.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  updateCard: PropTypes.func.isRequired,
};

export default MonthInput;