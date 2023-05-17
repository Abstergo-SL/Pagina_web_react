import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { darkTheme, lightTheme } from "../utils/Theme";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import bg from "public/553150.jpg";
import main from "./main";
import { borderRadius, width } from "@mui/system";
import { Card1, Card2 } from "../components/Cards";
import { Button } from "@mui/material";
import Footer from "../components/Footer";

function Landing(props:any) {
  const [theme, setTheme] = React.useState<any>(lightTheme);
  const [mainBoxWidth, SetMainBoxWidth] = React.useState(100);
  const [mainBoxHeight, SetMainBoxHeight] = React.useState(100);


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
      SetMainBoxWidth(window.outerWidth / 1.5);
      SetMainBoxHeight(window.outerHeight / 1.3);
    }
  }, []);

  return (
    <div
      style={{
        paddingTop: "20px",
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
            height: mainBoxHeight ,
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
            <Button variant="contained" onClick={()=>{props.changePage("DOWNLOAD")}}>
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
                  alignSelf: "center"
                }}
                sx={{
                  verticalAlign: "center",
                  display: "flex",
                }}
                gutterBottom
                color="black"
              >
                ¡Comienza tu Aventura!
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
                Descargalo y juega ya
              </Typography>
              </div>
            </Button>
        </div>
      </Box>
      <br/>
      <br/>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: mainBoxWidth,
            height: mainBoxHeight * 0.8,
          },
        }}
      >
        <Paper
          sx={{ backgroundColor: theme.palette.background.paper }}
          elevation={1}
        >
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            color={theme.palette.primary.contrastText}
            style={{ 
              margin: "45px",
              color: "black" 
            }}
          >
            Un Mundo de Posibilidades
          </Typography>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={25}>
              {[Card1(), Card2()].map((value) => (
                <Grid item>
                  <Paper
                    sx={{
                      height: mainBoxHeight / 1.5 * 0.8,
                      width: mainBoxWidth /3.75 ,
                      backgroundColor: theme.palette.secondary.main,
                    }} 
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center"
                    }}
                  >{value}</Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <br /><br /><br />
      <Footer></Footer>
    </div>  
  );
}

export default Landing;
