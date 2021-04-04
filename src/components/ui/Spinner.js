import React from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => {
  return <img style={spinnerStyle} src={spinner} alt="Loading" />;
};

const spinnerStyle = {
  margin: 'auto',
  display: 'block',
};

export default Spinner;
