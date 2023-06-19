import React, { useState } from "react";
import { TextField, Box, Typography } from "@mui/material";
import { darkTheme, lightTheme } from "../utils/Theme";
import Footer from "../components/Footer";
import bg from "public/bg_aux.jpg";

const Perfil = (props : any) => {
  const [theme, setTheme] = useState(lightTheme);
  const [mainBoxWidth, setMainBoxWidth] = useState(100);
  const [mainBoxHeight, setMainBoxHeight] = useState(100);

  React.useEffect(() => {
    document.body.classList?.remove("loading");
    document.title = "Abstergo";
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDarkMode) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }

    if (typeof window !== "undefined") {
      setMainBoxWidth(window.outerWidth / 2.5);
      setMainBoxHeight(window.outerHeight / 1.3);
    }
  }, []);

  const getDatosPerfil = () => {
    window.localStorage.getItem("token");
    
  }
  
  
  return (
    <div>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: mainBoxHeight *1.05 + 4,
        backgroundColor: theme.palette.background.default,
        backgroundImage: "url(" + bg.src + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
        Datos de Usuario
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
          borderRadius: "4px",
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[3],
        }}
      >
        <TextField
          label="Usuario"
          value="AgenteZq00"
          disabled
          variant="outlined"
        />
        <TextField
          label="Email"
          value="email@gmail.com"
          disabled
          variant="outlined"
        />
        <TextField
          label="Nombre"
          value="Carlos"
          disabled
          variant="outlined"
        />
        <TextField
          label="Apellido"
          value="Pinilla Bernal"
          disabled
          variant="outlined"
        />
      </Box>
    </Box>
    <Footer></Footer>
    </div>
  );
}

export default Perfil;
