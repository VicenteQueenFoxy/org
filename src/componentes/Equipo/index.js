import "./Equipo.css"
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {
    //destructuracion
    const { colorPrimario, colorSecundario, titulo,id } = props.datos;
    const estiloTitulo = { borderColor: colorPrimario };
    const { colaboradores, eliminarColaborador, actualizarColor,like } = props;


    return <>{colaboradores.length > 0 &&
        <section className="equipo" style={{ backgroundColor:hexToRgba(colorPrimario,0.6)}}>
            <input
            type='color'
            className="input-color"
            value={colorPrimario}
            onChange={(evento)=>{
                actualizarColor(evento.target.value,id)
            }}
            />
            
            
           
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores"></div>
            {colaboradores.map((colaborador, index) => <Colaborador
                datos={colaborador}
                key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador={eliminarColaborador}
                like={like}

            />)
            }
        </section>}</>
}

export default Equipo