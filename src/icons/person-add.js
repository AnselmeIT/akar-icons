import React from 'react';
import PropTypes from 'prop-types';

const PersonAdd = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
      id="PersonAdd"
    >
      <circle cx="12" cy="7" r="5"></circle>
      <path d="M17 22H5.266a2 2 0 01-1.985-2.248l.39-3.124A3 3 0 016.649 14H7"></path>
      <path d="M19 13v6"></path>
      <path d="M16 16h6"></path>
    </svg>
  );
};

PersonAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PersonAdd.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default PersonAdd;
