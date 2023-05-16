import * as React from "react";
import { darkTheme, lightTheme } from '../utils/Theme';
import { Box, Paper, Typography, Card, Grid, Button } from "@mui/material";
import bg from "public/553150.jpg";
import Footer from "../components/Footer";


function download() {
  const [theme, setTheme] = React.useState<any>(lightTheme);
  const [mainBoxWidth, SetMainBoxWidth] = React.useState(100);
  const [mainBoxHeight, SetMainBoxHeight] = React.useState(100);

  React.useEffect(() => {
    document.body.classList?.remove('loading');
    document.title = 'Abstergo';

    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }

    if (typeof window !== "undefined") {
      SetMainBoxWidth(window.outerWidth / 1.5);
      SetMainBoxHeight(window.outerHeight / 1.3);
    }
  }, []);

  
  return (
    <div
      style={{
        paddingTop: "0px",
        paddingBottom: "0px",
        paddingRight: "0px",
        paddingLeft: "0px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 0,
            width: mainBoxWidth * 1.5,
            height: mainBoxHeight *1.3,
            backgroundImage: "url(" + bg.src + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Paper 
            sx={{ backgroundColor: theme.palette.background.paper }}
          elevation={1}>

              <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Typography
                variant="h2"
                align="center"
                style={{
                  alignSelf: "center",
                  marginLeft:"40px",
                  marginRight:"40px"
                }}
                sx={{
                  verticalAlign: "center",
                  display: "flex",
                }}
                gutterBottom
                color="black"
              >
                ¡Juega Ahora!
              </Typography>
              <Typography
                variant="h5"
                align="center"
                style={{
                  alignSelf: "center"
                }}
                sx={{
                  verticalAlign: "center",
                  display: "flex",
                }}
                gutterBottom
                color="black"
              >
                Descargarlo Gratis
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{
                  alignSelf: "center"
                }}
                sx={{
                  verticalAlign: "center",
                  display: "flex",
                }}
                gutterBottom
                color="black"
              >
                Version 1.0.5
              </Typography>
              </div>

              <br /><br />
              
              <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center", 
                marginBottom: "5%"
              }}>
              <Button variant="contained">
                <Typography
                variant="h6"
                align="center"
                style={{
                  alignSelf: "center"
                }}
                sx={{
                  verticalAlign: "center",
                  display: "flex",
                }}
                gutterBottom
                color="black"
              >
                Windows x64
              </Typography>
            </Button>
            </div>
            </Paper>
        </div>
      </Box>
      <Footer></Footer>
    </div>  
  )
}

export default download;