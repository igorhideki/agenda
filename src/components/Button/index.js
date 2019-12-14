import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Button({ children, color, size, onClick, ...rest }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container onClick={onClick} color={color} size={size} {...rest}>
      {children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: '',
  size: '',
  onClick: () => {},
};
