import React from 'react';
import PropTypes from 'prop-types';

import Button from '~/components/Button';
import { Overlay, Container, Header, Body, Footer } from './styles';

export default function Modal({
  children,
  title,
  onCancel,
  onConfirm,
  cancelText,
  confirmText,
  isOpen,
}) {
  return isOpen ? (
    <Overlay>
      <Container>
        <Header>
          <h4>{title}</h4>
        </Header>

        <Body>{children}</Body>

        <Footer>
          <Button color="secondary" size="small" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button color="primary" size="small" onClick={onConfirm}>
            {confirmText}
          </Button>
        </Footer>
      </Container>
    </Overlay>
  ) : (
    <div />
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  onCancel: () => {},
  onConfirm: () => {},
  cancelText: 'Cancelar',
  confirmText: 'Confirmar',
  isOpen: false,
};
