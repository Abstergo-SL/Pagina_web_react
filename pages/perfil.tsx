import React, { useState, useEffect } from "react";
import { TextField, Box, Typography, Grid } from "@mui/material";
import { darkTheme, lightTheme } from "../utils/Theme";
import Footer from "../components/Footer";
import bg from "public/bg_aux.jpg";
import HttpGet from "../utils/TriggerFetch";
import { request } from "../interfaces/request";
import * as jose from 'jose';

interface UserData {
  user: string;
  pass: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  type?: string;
}

const API_URL = "http://127.0.0.1:5000";

const Perfil = (props: any) => {
  const [theme, setTheme] = useState(lightTheme);
  const [mainBoxWidth, setMainBoxWidth] = useState(100);
  const [mainBoxHeight, setMainBoxHeight] = useState(100);
  const [userData, setUserData] = useState<UserData>({
    user: "",
    pass: "",
    email: "",
    firstName: "",
    lastName: "",
    type: "0"
  });

  useEffect(() => {
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

  const getDatosPerfil = async () => {
    let token = window.localStorage.getItem("token");

    if (token?.length! < 3) {
      window.location.href = "/login";
    }
    let tkData = jose.decodeJwt(token!);
    console.log(tkData);

    try {
      const url_user = API_URL + "/user/nick/" + tkData["username"];

      const data_user: request = {
        baseUrl: url_user,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          "Authorization": "Bearer " + token
        },
        endpoint: ""
      };

      let response_user: any = await HttpGet(data_user);

      if (!response_user) {
        throw new Error("Failed to perform the operation");
      }

      // Handle the successful response here
      response_user = JSON.parse(response_user + "");
      console.log("////////////////////////////////")
      console.log(response_user);

      setUserData({
        user: response_user.nick,
        pass: "", // No se muestra la contraseña
        email: response_user.mail,
        firstName: response_user.nombre,
        lastName: response_user.apellido,
        type: "0"
      });

    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getDatosPerfil();
  }, []);

  return (
    <div>
      <Grid container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: mainBoxHeight * 1.05 + 4,
          backgroundColor: theme.palette.background.default,
          backgroundImage: "url(" + bg.src + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
        <Grid item xs={6}>
          <Box>
            {/* Contenido del primer Box */}
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
                boxShadow: theme.shadows[3]
              }}
            >
              <TextField
                label="Usuario"
                value={userData.user}
                disabled
                variant="outlined"
              />
              <TextField
                label="Email"
                value={userData.email}
                disabled
                variant="outlined"
              />
              <TextField
                label="Nombre"
                value={userData.firstName}
                disabled
                variant="outlined"
              />
              <TextField
                label="Apellido"
                value={userData.lastName}
                disabled
                variant="outlined"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            {/* Contenido del segundo Box */}
            <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
              Datos de la Partida
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "2rem",
                borderRadius: "4px",
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[3]
              }}
            >
              {/* Campos del jugador */}
              <TextField
                label="Nombre"
                value=""//{player._name}
                disabled
                variant="outlined"
              />
              <TextField
                label="Ataque"
                value=""//{player._atk}
                disabled
                variant="outlined"
              />
              <TextField
                label="Cadencia"
                value=""//{player._cadencia}
                disabled
                variant="outlined"
              />
              <TextField
                label="Defensa"
                value=""//{player._def}
                disabled
                variant="outlined"
              />
              <TextField
                label="Estus"
                value=""//{player._estus}
                disabled
                variant="outlined"
              />
              <TextField
                label="Velocidad"
                value=""//{player._speed}
                disabled
                variant="outlined"
              />
              <TextField
                label="Puntos de vida"
                value=""//{player._hp}
                disabled
                variant="outlined"
              />
               <TextField
                label="Puntos de vida máximos"
                value=""//{player._maxHp}
                disabled
                variant="outlined"
              />
              <TextField
                label="Nivel de experiencia"
                value=""//{player._level.Xp}
                disabled
                variant="outlined"
              />
              <TextField
                label="Experiencia para subir de nivel"
                value=""//{player._level.XpToLevelUp}
                disabled
                variant="outlined"
              />
              <TextField
                label="Nivel"
                value=""//{player._level.level}
                disabled
                variant="outlined"
              />
              <TextField
                label="Experiencia obtenida"
                value=""//{player._xpLoot}
                disabled
                variant="outlined"
              />

            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
};

export default Perfil;
