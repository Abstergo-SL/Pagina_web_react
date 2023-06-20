import * as React from "react";
import Footer from "../components/Footer";
import { darkTheme, lightTheme } from '../utils/Theme';
import { Box, Button, Typography, Paper, Grid, ButtonGroup } from "@mui/material";
import { Card1, Card2 } from "../components/Cards";
import bg from "public/bg_aboutUs.jpg";
import bg_aux from "public/bg_aux.jpg";

function AboutUs(props: any) {
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
                        sx={{ backgroundColor: "#bed0e6" }}
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

            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    "& > :not(style)": {
                        m: 0,
                        width: mainBoxWidth * 1.5,
                        height: mainBoxHeight,
                        backgroundImage: "url(" + bg_aux.src + ")",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    },
                }}>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        "& > :not(style)": {
                            m: 1,
                            width: mainBoxWidth * 1.3,
                            height: mainBoxHeight / 1.4,
                            marginTop: mainBoxWidth/100,    
                        },
                    }}
                >
                    <Paper
                        sx={{ backgroundColor: "#bed0e6" }}
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
                            ¿Qué es Rememberance?
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
                            En la tierra de Yolen, la lucha eterna entre los señores del sol y los señores de la noche había dictado el destino de la humanidad por incontables generaciones. Los grandes señores, cuyo poder era imparable, incluyendo a los señores de las estrellas y al gran señor de la luna, gobernaban sin piedad, imponiendo su voluntad y dictando el destino de todos los reinos de los hombres.
                            <br /><br />
                            Sin embargo, había un grupo de guerreros conocidos como los resurgidos libres, que se habían levantado en oposición a los grandes señores. Estos guerreros eran hombres y mujeres que habían perdido sus recuerdos, pero habían encontrado una razón para luchar. Y aunque eran pocos, su determinación y su coraje eran inquebrantables.
                            En medio de este conflicto, un resurgido elegido fue secuestrado y encarcelado en la cárcel de Manilla, condenado a una muerte segura. Pero gracias a la intervención de otro resurgido libre, que había escapado de esa misma cárcel en el pasado, el prisionero logró escapar y enfrentar al verdugo de Manilla, el resurgido encargado de ejecutar a todos los prisioneros de la cárcel.
                            La lucha fue intensa, una batalla de poderes y magia que sacudió los cimientos de la cárcel de Manilla. Pero al final, el resurgido elegido emergió victorioso, con el verdugo de Manilla a sus pies. Y así, se unió a la causa de los resurgidos libres, jurando luchar contra los grandes señores y recuperar su verdadero pasado.
                            <br /><br />
                            Con el tiempo, el resurgido elegido se convirtió en un guerrero legendario, liderando a los resurgidos libres en la batalla contra los señores del sol y los señores de la noche. Y aunque la lucha fue larga y difícil, y hubo momentos en que todo parecía perdido, finalmente, los resurgidos libres prevalecieron, y los grandes señores fueron derrotados.
                            La tierra de Chaia cambió para siempre, y aunque la paz aún era frágil, la esperanza volvió a brillar en el corazón de la humanidad. Y se decía que el resurgido elegido, cuyo nombre ya había sido olvidado, había sido el catalizador de ese cambio, el héroe que había llevado a su pueblo hacia un futuro más brillante.

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
                                ¿Aún no formas parte? ¡Únete!
                            </Typography>
                            <ButtonGroup size="large" aria-label="large button group">
                                <Button href="/login">Inicia Sesión</Button>
                                <Button href="/login">Regístrate</Button>
                            </ButtonGroup>
                        </div>
                    </Paper>
                </Box>
            </Box>
            
            <Footer></Footer>
        </div >
    )
}

export default AboutUs;