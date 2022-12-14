import React from 'react';
import './GenericModal.scss';
import { Dialog, DialogProps } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

interface Props {
  persist?: boolean;
  size?: 'mini' | 'small' | 'medium' | 'large' | 'fullscreen';
  showCloseIcon?: boolean;
}

const GenericModal: React.FC<DialogProps & Props> = (props) => {
  const { open, onClose, persist = false, children, size } = props;
  const fullScreen = size === 'fullscreen';

  const closeModal = (e: any) => {
    if (onClose) {
      onClose(e, 'backdropClick');
    }
  };

  return (
    <Dialog
      classes={{ paper: 'modal ' + (size ? size : ' ') }}
      disableBackdropClick={persist}
      disableEscapeKeyDown={persist}
      fullScreen={fullScreen}
      maxWidth={fullScreen ? false : 'lg'}
      onClose={onClose}
      open={open}
    >
      <CloseIcon className="closeIcon" onClick={closeModal} />
      {children}
    </Dialog>
  );
};

export default GenericModal;
