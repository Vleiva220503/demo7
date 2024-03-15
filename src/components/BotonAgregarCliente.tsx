import React from 'react';
import { Button, Grid } from '@mui/material';
import Link from 'next/link';
import FeedIcon from '@mui/icons-material/Feed';

const BotonAgregarCliente = () => {
  return (
    <Grid container justifyContent="flex-end">
      <Link href="/agregar-cliente" passHref>
        <Button 
          sx={{ 
            backgroundColor: 'black',
            borderRadius: '6px', 
            minWidth: 'auto', 
            paddingX: '20px', 
            paddingY: '10px', 
            textTransform: 'none', 
            '&:hover': {
              backgroundColor: 'black', 
            },
            '&:focus': {
              backgroundColor: 'black', 
            }
          }} 
          startIcon={<FeedIcon sx={{ color: 'white' }} />} 
        >
          <span style={{ color: 'white' }}>Agregar cliente</span>
        </Button>
      </Link>
    </Grid>
  );
};

export default BotonAgregarCliente;
