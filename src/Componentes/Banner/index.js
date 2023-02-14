import './Banner.css'

import React, { useState } from 'react'
import Menu from '../Menu'

export default function Banner() {
  const [mouseLetra, setMouseLetra] = useState(false);
  const [mouseBanner, setMouseBanner] = useState(false);
  //onMouseEnter={() => setMouse(true)} onMouseLeave={() => setMouse(false)}

  console.log(mouseBanner, mouseLetra)
  return (
    <section>
      <header
        className='cabecalho'
      >

        <div
          className='container__cabecalho'>
          <p
            onMouseOver={() => setMouseLetra(true)} onMouseOut={() => setMouseLetra(false)}
            className={mouseLetra || mouseBanner ? 'cabecalho__texto cabecalho__texto--true' : 'cabecalho__texto cabecalho__texto--false'}
          >
            Valorant
          </p>

        </div>
        <div
          className={mouseLetra || mouseBanner ? 'banner banner--true' : 'banner banner--false'}
          onMouseEnter={() => setMouseBanner(true)} onMouseLeave={() => setMouseBanner(false)}
        />
      </header>
      <Menu />
    </section>

  )
}
