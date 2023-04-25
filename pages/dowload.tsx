import * as React from "react";
import { darkTheme, lightTheme } from '../utils/Theme';
import { Box, Paper, Typography, Card, Grid } from "@mui/material";


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
    <div>
      <br /><br />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          "& > :not(style)": {
            m: 1,
            width: mainBoxWidth * 10,
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
            Download
          </Typography>
          <Grid container justifyContent="center" spacing={2}>
            {[0, 1].map((value) => (
              <Grid key={value} item>
                <Paper
                  sx={{
                    height: mainBoxHeight / 1.3,
                    width: mainBoxWidth / 2.2,
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </div>
  )
}

export default download;