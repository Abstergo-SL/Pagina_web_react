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

interface player {
  _atk?: number;
  _cadencia?: number;
  _def?: number;
  _estus?: number;
  _hp?: number;
  _maxHp?: number;
  _name?: string;
  _speed?: number;
  _xpLoot?: number;
  _level: {
    Xp?: number;
    XpToLevelUp?: number;
    level?: number;
  };
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
  const [player, setPlayer] = useState<player>({
    _atk: 0,
    _cadencia: 0,
    _def: 0,
    _estus: 0,
    _hp: 0,
    _maxHp: 0,
    _name: "",
    _speed: 0,
    _xpLoot: 0,
    _level: {
      Xp: 0,
      XpToLevelUp: 0,
      level: 0
    }
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

  const getDatosPlayer = async () => {
    let token = window.localStorage.getItem("token");

    if (token?.length! < 3) {
      window.location.href = "/login";
    }
    let tkData = jose.decodeJwt(token!);
    console.log(tkData);

    try {
      const url_user = API_URL + "/partidas/" + tkData["username"];

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

      setPlayer({
        _atk: response_user[0].player._atk,
        _cadencia: response_user[0].player._cadencia,
        _def: response_user[0].player._def,
        _estus: response_user[0].player._estus,
        _hp: response_user[0].player._hp,
        _maxHp: response_user[0].player._maxHp,
        _name: response_user[0].player._name,
        _speed: response_user[0].player._speed,
        _xpLoot: response_user[0].player._xpLoot,
        _level: {
          Xp: response_user[0].player._level.Xp,
          XpToLevelUp: response_user[0].player._level.XpToLevelUp,
          level: response_user[0].player._level.level
        }
      });

    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getDatosPerfil();
    getDatosPlayer();
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
          <Box sx={{ marginLeft:"10%"}}>
            {/* Contenido del segundo Box */}
            <Typography variant="h3" sx={{ marginBottom: "2rem"}} style={{textAlign:"center"}}>
              Datos de la Partida
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "4rem",
                padding: "1.5rem",
                borderRadius: "4px",
                backgroundColor: theme.palette.background.paper,
                boxShadow: theme.shadows[3]
              }}
            >
              {/* Campos del jugador */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}>
                <TextField
                  sx={{margin: 1.25}}
                  label="Nombre"
                  value={player._name}
                  disabled
                  variant="outlined"
                />
                <TextField
                  sx={{margin: 1.25}}
                  label="Ataque"
                  value={player._atk}
                  disabled
                  variant="outlined"
                />
                <TextField
                  sx={{margin: 1.25}}
                  label="Cadencia"
                  value={player._cadencia}
                  disabled
                  variant="outlined"
                />
                <TextField
                  sx={{margin: 1.25}}
                  label="Defensa"
                  value={player._def}
                  disabled
                  variant="outlined"
                />
                <TextField
                  sx={{margin: 1.25}}
                  label="Estus"
                  value={player._estus}
                  disabled
                  variant="outlined"
                />
                <TextField
                  sx={{margin: 1.25}}
                  label="Velocidad"
                  value={player._speed}
                  disabled
                  variant="outlined"
                />
              </Box>
              <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}>
                <TextField
                  sx={{margin: 1.25}}
                  label="Puntos de vida"
                  value={player._hp}
                  disabled
                  variant="outlined"
                />
                <TextField
                  sx={{margin: 1.25}}
                  label="Vida máxima"
                  value={player._maxHp}
                  disabled
                  variant="outlined"
                />
                <TextField
                  sx={{margin: 1.25}}
                  label="Nivel"
                  value={player._level.level}
                  disabled
                  variant="outlined"
                />
                <TextField
                  sx={{margin: 1.25}}
                  label="Nivel de experiencia"
                  value={player._level.Xp}
                  disabled
                  variant="outlined"
                />
                <TextField
                  sx={{margin: 1.25}}
                  label="Experiencia restante"
                  value={player._level.XpToLevelUp}
                  disabled
                  variant="outlined"
                />
                <TextField
                  sx={{margin: 1.25}}
                  label="Experiencia obtenida"
                  value={player._xpLoot}
                  disabled
                  variant="outlined"
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
};

export default Perfil;
