import Personagens from '../Personagens';
import './Lista.css'

const Lista = (props) => {
    return (
        <ul className='lista'>
            {props.agentes.map((agente, indice) => {
                return (
                    <Personagens
                        agente={agente}
                        larguraPersonagem={props.larguraPersonagem}
                    /> 
                )
            })}
        </ul>
    )
}

export default Lista;