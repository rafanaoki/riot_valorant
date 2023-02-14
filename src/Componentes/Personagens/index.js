import React, { useState } from 'react'
import Digitacao from '../Digitacao'
import './Personagens.css'

const Personagens = ({ agente, larguraPersonagem }) => {
    const [aparecer, setAparecer] = useState(false);
    return (
        <section
            className='personagens'
            onMouseEnter={() => setAparecer(true)}
            onMouseLeave={() => setAparecer(false)}
            style={{
                background: `linear-gradient(${agente.corSecundaria}, #0D161F)`,
                maxWidth: `${larguraPersonagem}px`
            }}
        >
            <div className={aparecer ? 'conteudo' : 'conteudo-invisivel'}>
                <div className='container-texto'>
                    <Digitacao
                        className='texto-titulo'
                        texto={`${agente.nome.toUpperCase()}`}
                    />
                    <h3 className='texto'>{`${agente.funcao}`}</h3>
                    <p>{agente.bio}</p>
                </div>
            </div>

            <div
                className={aparecer ? 'container-imagem-true' : 'container-imagem-false'}
                style={
                    {background: `linear-gradient(${agente.corSecundaria}, #000)`}}
            >
                <img className={aparecer ? 'imagem-true' : 'imagem-false'}
                    src={`${agente.img}`}
                />
            </div>

        </section>
    )
}

export default Personagens;