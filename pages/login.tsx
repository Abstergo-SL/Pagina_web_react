import React, { useState } from "react";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import { darkTheme, lightTheme } from "../utils/Theme";
import bg from "public/bg_perfil.jpg";
import Footer from "../components/Footer";

interface UserData {
  user: string;
  pass: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  type?: string;
}

function Landing(props: any) {
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
  const [isRegistering, setIsRegistering] = useState(false);

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleToggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const url = isRegistering ? "https://api.example.com/register" : "https://263d-79-116-84-193.ngrok-free.app/login";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "ngrok-skip-browser-warning": "69420"
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to perform the operation');
      }

      console.log("/////////////////////////////////////////////////////////////////////////////")
      // Handle the successful response here

      setUserData({
        user: "",
        pass: "",
        email: "",
        firstName: "",
        lastName: "",
        type: "0"
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          marginTop: -mainBoxHeight / 88,
          width: mainBoxWidth * 2.5,
          height: mainBoxHeight * 1.3,
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          backgroundImage: "url(" + bg.src + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",          
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            marginLeft: "20%",
            backgroundColor: "#bed0e6",
            width: isRegistering ? mainBoxWidth /1.3 : mainBoxWidth/1.3,
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: 2 }}>
            {isRegistering ? "Registro" : "Iniciar sesión"}
          </Typography>
          <form onSubmit={handleSubmit}>
            {isRegistering && (
              <>
                <TextField
                  label="Correo"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Nombre"
                  name="firstName"
                  value={userData.firstName}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Apellidos"
                  name="lastName"
                  value={userData.lastName}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  margin="normal"
                />
              </>
            )}
            <TextField
              label="Usuario"
              name="username"
              defaultValue={userData.user}
              onChange={handleInputChange}
              required
              fullWidth
              margin="normal"
            />
            <TextField
              label="Contraseña"
              name="password"
              defaultValue={userData.pass}
              onChange={handleInputChange}
              type="password"
              required
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              type="submit"
              sx={{ backgroundColor: "#4997f2", marginTop: 2 }}
            >
              {isRegistering ? "Registrarse" : "Iniciar sesión"}
            </Button>
          </form>
          {!isRegistering && (
            <Typography
              variant="body2"
              sx={{ marginTop: 2, textAlign: "center" }}
            >
              ¿No tienes una cuenta?{" "}
              <Button color="primary" onClick={handleToggleForm}>
                Regístrate aquí
              </Button>
            </Typography>
          )}
          {isRegistering && (
            <Typography
              variant="body2"
              sx={{ marginTop: 2, textAlign: "center" }}
            >
              ¿Ya tienes una cuenta?{" "}
              <Button color="primary" onClick={handleToggleForm}>
                Iniciar sesión
              </Button>
            </Typography>
          )}
        </Paper>
      </Box>
    </div>
  );
}

export default Landing;
