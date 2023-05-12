
import f_cam from "public/castillo.png";
import f_sur from "public/espadas.png";

export function Card1() {


    return (
        <>
            <h1>Campaña</h1>

            <div style={{
                width:"80%",
                height:"30%",
                backgroundImage: "url(" + f_cam.src + ")",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
            }}></div>

            <p>Completa misiones, enfrentate a terribles enemigos y descubre los secretos que se esconden por nuestro universo</p>
        </>
    )
}

export function Card2() {

    return (
        <>
            <h1>Survival</h1>

            <div style={{
                width:"80%",
                height:"30%",
                backgroundImage: "url(" + f_sur.src + ")",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
            }}></div>

            <p>El modo de supervivencia clásico. Aguanta oleadas de enemigos y mejora tu puntuación o estadísticas.</p>
        </>
    )
}