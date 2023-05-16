import * as React from "react";
import Footer from "../components/Footer";
import { darkTheme, lightTheme } from '../utils/Theme';
import { Box, Button, Typography, Paper, Grid, ButtonGroup } from "@mui/material";
import { Card1, Card2 } from "../components/Cards";
import bg from "public/553150.jpg";

function AboutUs() {
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
                        height: mainBoxHeight / 2,
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
                        <div>
                            <Typography
                                variant="h2"
                                align="center"
                                style={{
                                    alignSelf: "center",
                                    marginLeft: "40px",
                                    marginRight: "40px"
                                }}
                                sx={{
                                    verticalAlign: "center",
                                    display: "flex",
                                }}
                                gutterBottom
                                color="black"
                            >
                                Acerca de Nosotros
                            </Typography>
                        </div>
                    </Paper>
                </div>
            </Box>
            <br />
            <br />
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    "& > :not(style)": {
                        m: 1,
                        width: mainBoxWidth * 1.3,
                        height: mainBoxHeight / 1.5,
                    },
                }}
            >
                <Paper
                    sx={{ backgroundColor: theme.palette.background.paper }}
                    elevation={1}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                        align="center"
                        color={theme.palette.primary.contrastText}
                        style={{
                            marginTop: "40px",
                            color: "black"
                        }}
                    >
                        ¿Qué es Abstergo?
                    </Typography>
                    <br />
                    <Typography
                        variant="body1"
                        align="left"
                        style={{
                            marginLeft: "2%",
                            marginRight: "2%"
                        }}
                        sx={{
                            verticalAlign: "center",
                            display: "flex",
                        }}
                        gutterBottom
                        color="black"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, expedita architecto aliquam impedit rerum ex aspernatur animi, voluptatem eaque dignissimos obcaecati velit placeat minus in eius nesciunt nostrum tempora est.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, rerum quasi adipisci est illum libero in a, officiis, corrupti qui soluta optio officia consequuntur laboriosam animi quas ea esse inventore!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quaerat quasi recusandae placeat quos id excepturi sunt ipsum suscipit soluta optio iusto, eveniet earum! Doloremque odit quos molestiae a necessitatibus!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate sapiente saepe quod debitis eaque unde ut commodi illo quisquam, eligendi, ratione illum? Nulla veniam repudiandae, esse debitis vero quidem ullam?
                    </Typography>
                    <br />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Typography
                            variant="body2"
                            gutterBottom
                            align="center"
                            color={theme.palette.primary.contrastText}
                            style={{
                                marginTop: "30px",
                                color: "black"
                            }}>
                            ¿Aún no eres parte de Abstergo? ¡Únete!
                        </Typography>
                        <ButtonGroup size="large" aria-label="large button group">
                            <Button>Inicia Sesión</Button>
                            <Button>Regístrate</Button>
                        </ButtonGroup>
                    </div>
                </Paper>
            </Box>
            <br /><br /><br />
            <Footer></Footer>
        </div >
    )
}

export default AboutUs;