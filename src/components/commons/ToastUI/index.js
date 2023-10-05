import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

export const ToastUI = ({severity, message, setShowToast}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShowToast(show);
  }, [setShowToast, show]);

  const bgColor = severity === "error" ? 'bg-danger' : 'bg-success';

  return (
    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className={`${bgColor} text-white`} animation>
        <Toast.Header>
          <strong className="me-auto">{severity.toUpperCase()}</strong>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}