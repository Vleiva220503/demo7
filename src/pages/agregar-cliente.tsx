import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Paper,
} from "@mui/material";
import { Alert } from "@mui/material";
import BotonRegresar from "../components/BotonRegresar";

const AgregarClientePage = () => {
  const [nuevoCliente, setNuevoCliente] = useState({
    razonSocial: "",
    RFC: "",
    telefono: "",
    nombreContrato: "",
    cargoContrato: "",
    correoElectronico: "",
  });

  const [clienteAgregado, setClienteAgregado] = useState(false);
  const [mostrarAlerta, setMostrarAlerta] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevoCliente({ ...nuevoCliente, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // manejar la lógica para agregar el cliente

    // Restablecer el formulario
    setNuevoCliente({
      razonSocial: "",
      RFC: "",
      telefono: "",
      nombreContrato: "",
      cargoContrato: "",
      correoElectronico: "",
    });

    // Marcar cliente como agregado
    setClienteAgregado(true);

    // Mostrar la alerta
    setMostrarAlerta(true);

    // Ocultar la alerta después de 4 segundos
    setTimeout(() => {
      setMostrarAlerta(false);
    }, 2000);
  };

  const isDisabled = Object.values(nuevoCliente).some(
    (value) => value.trim() === ""
  );

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Paper
          elevation={0}
          style={{
            padding: "40px",
            border: "1px solid #CCCCCC",
            width: "80%",
            maxWidth: "500px",
          }}
        >
          <Box display="flex" alignItems="center" mb={3}>
            <BotonRegresar />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              flexGrow={1}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  color: "#000",
                  ml: "10px",
                }}
                gutterBottom
              >
                Nuevo Cliente
              </Typography>
            </Box>
          </Box>
          <form onSubmit={handleSubmit} className="formulario">
            <Box mt={2} className="input-group">
              <TextField
                fullWidth
                variant="standard"
                label="Razón Social"
                name="razonSocial"
                value={nuevoCliente.razonSocial}
                onChange={handleInputChange}
                InputProps={{ disableUnderline: true }}
                style={{ color: "#000", borderBottom: "1px solid #CCCCCC" }}
              />
            </Box>
            <Box mt={2} className="input-group">
              <TextField
                fullWidth
                variant="standard"
                label="RFC"
                name="RFC"
                value={nuevoCliente.RFC}
                onChange={handleInputChange}
                InputProps={{ disableUnderline: true }}
                style={{ color: "#000", borderBottom: "1px solid #CCCCCC" }}
              />
            </Box>
            <Box mt={2} className="input-group">
              <TextField
                fullWidth
                variant="standard"
                label="Teléfono"
                name="telefono"
                value={nuevoCliente.telefono}
                onChange={handleInputChange}
                InputProps={{ disableUnderline: true }}
                style={{ color: "#000", borderBottom: "1px solid #CCCCCC" }}
              />
            </Box>
            <Box mt={2} className="input-group">
              <TextField
                fullWidth
                variant="standard"
                label="Nombre del Contrato"
                name="nombreContrato"
                value={nuevoCliente.nombreContrato}
                onChange={handleInputChange}
                InputProps={{ disableUnderline: true }}
                style={{ color: "#000", borderBottom: "1px solid #CCCCCC" }}
              />
            </Box>
            <Box mt={2} className="input-group">
              <TextField
                fullWidth
                variant="standard"
                label="Cargo del Contrato"
                name="cargoContrato"
                value={nuevoCliente.cargoContrato}
                onChange={handleInputChange}
                InputProps={{ disableUnderline: true }}
                style={{ color: "#000", borderBottom: "1px solid #CCCCCC" }}
              />
            </Box>
            <Box mt={2} className="input-group">
              <TextField
                fullWidth
                variant="standard"
                label="Correo Electrónico"
                name="correoElectronico"
                value={nuevoCliente.correoElectronico}
                onChange={handleInputChange}
                InputProps={{ disableUnderline: true }}
                style={{ color: "#000", borderBottom: "1px solid #CCCCCC" }}
              />
            </Box>
            <Box mt={2} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color={isDisabled ? "primary" : "secondary"}
                disabled={isDisabled}
              >
                Agregar Cliente
              </Button>
            </Box>
          </form>
          {mostrarAlerta && clienteAgregado && (
            <Box
              style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                zIndex: 9999,
              }}
            >
              <Alert severity="success">Cliente agregado con éxito</Alert>
            </Box>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default AgregarClientePage;
