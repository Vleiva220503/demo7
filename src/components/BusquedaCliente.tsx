import React, { useRef } from 'react';
import { TextField, InputAdornment, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const BusquedaCliente = () => {
  const inputRef = useRef(null);

  return (
    <Grid container justifyContent="flex-end">
      <TextField
        inputRef={inputRef}
        placeholder="Buscar cliente"
        variant="outlined"
        size="small" // Igualar el tamaño del TextField
        style={{ 
          minWidth: 'auto',
          width: 'auto', // Ajustar al ancho automático
          paddingRight: '20px' // Espacio para el icono de búsqueda
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
};

export default BusquedaCliente;
