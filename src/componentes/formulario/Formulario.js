import { useState } from "react"
import "./Formulario.css"
import Campo from "../campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo]=useState("");
     const[color, actualizarColor]= useState("");

    const {registrarColaborador,crearEquipo} = props;

    const manejarEnvio=(event) => {
        event.preventDefault();
        console.log("manejar el envio");
        let  datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        };
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo=(e) => {
        e.preventDefault()
        crearEquipo({titulo, colorPrimario:color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo ="Nombre" placeholder="Ingresar nombre" required valor={nombre} setValor={actualizarNombre}/>
            <Campo titulo="Puesto" placeholder="Ingresar puesto" required valor={puesto} setValor={actualizarPuesto}/>
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required valor={foto} setValor={actualizarFoto}/>
            <ListaOpciones valor={equipo} actualizarEquipo={actualizarEquipo} equipos={props.equipos}/>
            <Boton>
            Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo titulo ="Titulo" placeholder="Ingresar titulo" required valor={titulo} setValor={actualizarTitulo}/>
            <Campo titulo="Color" placeholder="Ingresar el color en Hex..." required valor={color} setValor={actualizarColor} type="color"/>
            <Boton>
            Registrar equipo
            </Boton>
        </form>

    </section>
}

export default Formulario