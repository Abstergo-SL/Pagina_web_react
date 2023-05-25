import React, { useState } from "react";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import { darkTheme, lightTheme } from "../utils/Theme";
import bg from "public/bg_perfil.jpg";
import Footer from "../components/Footer";

function Landing(props: any) {
  const [theme, setTheme] = useState(lightTheme);
  const [mainBoxWidth, setMainBoxWidth] = useState(100);
  const [mainBoxHeight, setMainBoxHeight] = useState(100);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      setMainBoxWidth(window.outerWidth / 1.5);
      setMainBoxHeight(window.outerHeight / 1.3);
    }
  }, []);

  const handleUsernameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <Box
        sx={{
          marginTop: -mainBoxHeight/88,
          width: mainBoxWidth * 1.5,
          height: mainBoxHeight * 1.2,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundImage: "url(" + bg.src + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",          
        }}
      >
        <Paper elevation={3} 
          sx={{ p: 4,
            marginLeft:"15%",
            backgroundColor: "#bed0e6"
         }}>
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            Iniciar sesión
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Usuario"
              value={username}
              onChange={handleUsernameChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Contraseña"
              value={password}
              onChange={handlePasswordChange}
              type="password"
              required
              fullWidth
              margin="normal"
            />
            <Button variant="contained" type="submit" sx={{ backgroundColor: "#4997f2" }}>
              Iniciar sesión
            </Button>
          </form>
        </Paper>
      </Box>
      
    </div>

  );
}

export default Landing;