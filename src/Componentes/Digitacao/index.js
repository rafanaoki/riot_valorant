import Typed from "react-typed";
import './Digitacao.css'
const Digitacao = (props) => {
    return (
        <Typed className="digitacao"
      strings={[
            `${props.texto}`
          ]}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
    )
}

export default Digitacao;