import React from 'react';
import { Grid } from '@mui/material';
import TablaClientes from '../components/TablaClientes';
import BusquedaCliente from '../components/BusquedaCliente';
import BotonAgregarCliente from '../components/BotonAgregarCliente';

const IndexPage = () => {
  return (
    <div>
      <Grid container justifyContent="flex-end" spacing={2} style={{ marginBottom: '8px' }}>
        <Grid item>
          <BusquedaCliente />
        </Grid>
        <Grid item>
          <BotonAgregarCliente />
        </Grid>
      </Grid>
      <TablaClientes /> 
    </div>
  );
};

export default IndexPage;
