import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { darkTheme, lightTheme } from "../utils/Theme";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Landing() {
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
        paddingTop: "25px",
        paddingBottom: "0",
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
            m: 1,
            width: mainBoxWidth,
            height: mainBoxHeight,
          },
        }}
      >
        <Paper
          sx={{ backgroundColor: theme.palette.background.paper }}
          elevation={5}
        >
          <Typography
            variant="h1"
            gutterBottom
            color={theme.palette.primary.contrastText}
          >
            Heading
          </Typography>
        </Paper>
      </Box>
      <br /><br />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: mainBoxWidth*1.3,
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
            align="center"
            color={theme.palette.primary.contrastText}
          >
            Movidas
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

export default Landing;
