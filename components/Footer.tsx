import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "75px",
        backgroundColor: "#0070f3",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <a href="https://github.com/Abstergo-SL" target="_blank"><GitHubIcon></GitHubIcon></a>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
            <a href="https://github.com/Abstergo-SL" target="_blank">
                © 2023 Copyright: Abstergo.com
            </a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;