import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { darkTheme, lightTheme } from "../utils/Theme";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Home() {
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
      SetMainBoxWidth(window.outerWidth / 2);
      SetMainBoxHeight(window.outerHeight / 2);
    }
  }, []);

  return (
    <div
      style={{
        paddingTop: "20px",
        paddingBottom: "605px",
        paddingRight: "0px",
        paddingLeft: "0px",
      }}
    >
      hola
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: mainBoxWidth,
            height: mainBoxHeight,
          },
        }}
      >
        <Paper
          sx={{ backgroundColor: theme.palette.background.paper }}
          elevation={1}
        >
          buenas tardses
          <Typography
            variant="h1"
            gutterBottom
            color={theme.palette.primary.contrastText}
          >
            h1. Heading
          </Typography>
        </Paper>
      </Box>
      buenas tardes
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: mainBoxWidth*1.5,
            height: mainBoxHeight,
          },
        }}
      >
        <Paper
          sx={{ backgroundColor: theme.palette.background.paper }}
          elevation={1}
        >
          <Typography
            variant="h1"
            gutterBottom
            color={theme.palette.primary.contrastText}
          >
            Mañana postre
          </Typography>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={15}>
              {[0, 1, 2].map((value) => (
                <Grid key={value} item>
                  <Paper
                    sx={{
                      height: mainBoxHeight / 1.5,
                      width: mainBoxWidth / 4,
                      backgroundColor: theme.palette.secondary.main
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}

export default Home;
