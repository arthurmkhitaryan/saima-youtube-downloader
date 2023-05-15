import React from 'react';

//styles
import * as S from './Spinner.styled';

const Spinner: React.FC = () => (
  <S.StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </S.StyledSpinner>
);

export default Spinner;