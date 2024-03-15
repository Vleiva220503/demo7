import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const datosQuemados = [
  {
    razonSocial: "Cliente A",
    rfc: "RFC-001",
    telefono: "1234567890",
    nombreContrato: "Contrato 1",
    cargoContacto: "Gerente",
    correoElectronico: "clienteA@example.com",
  },
  {
    razonSocial: "Cliente B",
    rfc: "RFC-002",
    telefono: "0987654321",
    nombreContrato: "Contrato 2",
    cargoContacto: "Director",
    correoElectronico: "clienteB@example.com",
  },
];

const TablaClientes = () => {
  return (
    <Box sx={{ overflowX: "auto" }}>
      <TableContainer
        component={Paper}
        elevation={0}
        style={{ backgroundColor: "transparent" }}
      >
        <Table>
          <TableHead style={{ backgroundColor: "#f2f2f2" }}>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">
                  Razón Social
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">
                  RFC
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">
                  Teléfono
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">
                  Nombre del Contrato
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">
                  Cargo del Contrato
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1" fontWeight="bold">
                  Correo Electrónico
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datosQuemados.map((cliente, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f2f2f2" : "transparent",
                }}
              >
                <TableCell style={{ backgroundColor: "white" }}>
                  {cliente.razonSocial}
                </TableCell>
                <TableCell style={{ backgroundColor: "white" }}>
                  {cliente.rfc}
                </TableCell>
                <TableCell style={{ backgroundColor: "white" }}>
                  {cliente.telefono}
                </TableCell>
                <TableCell style={{ backgroundColor: "white" }}>
                  {cliente.nombreContrato}
                </TableCell>
                <TableCell style={{ backgroundColor: "white" }}>
                  {cliente.cargoContacto}
                </TableCell>
                <TableCell style={{ backgroundColor: "white" }}>
                  {cliente.correoElectronico}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TablaClientes;
