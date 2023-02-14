import { useState, useEffect } from 'react';
import Lista from '../Lista'
import './Carrossel.css'

const Carrossel = ({personagens, minLargura}) => {
    const [largura, setLargura] = useState(window.innerWidth);

    useEffect(() => {
      function larguraTela() {
        setLargura(window.innerWidth);
      }
      window.addEventListener('resize', larguraTela);
      return _ => window.removeEventListener('resize', larguraTela);
    })

    let maxAgente = Math.floor(largura / minLargura);
    if (maxAgente > personagens.length) maxAgente = personagens.length - 1;
    const larguraPersonagem = largura / maxAgente;
    let listaCheia = [];
    let listaPersonagens = []
    let i = 0;

    return (
        <section className='Carrossel'>
            {personagens.map((agente, indice) => {
                if (i < maxAgente && indice < personagens.length - 1) {
                    i ++;
                    listaCheia.push(agente)

                } else if (i === maxAgente || indice === personagens.length - 1) {
                    listaPersonagens = listaCheia;
                    listaCheia = [];
                    listaCheia.push(agente)
                    i = 1;
                    return (
                        <Lista
                            key={indice}
                            agentes={listaPersonagens}
                            larguraPersonagem={larguraPersonagem}
                            maxAgente={maxAgente}
                        />
                    )
                }
            })}
        </section>
    )
}


export default Carrossel;