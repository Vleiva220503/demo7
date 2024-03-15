import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BotonRegresar = () => {
  const handleRegresar = () => {
    window.location.href = 'http://localhost:3000/';
  };

  return (
    <Button
      style={{ background: 'black', color: 'white', width: '40px', height: '40px', borderRadius: '4px' }}
      onClick={handleRegresar}
    >
      <ArrowBackIosIcon style={{ color: 'white', fontSize: '24px' }} />
    </Button>
  );
};

export default BotonRegresar;
