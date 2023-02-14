import Carrossel from "./Componentes/Carrossel";
import personagens from "../src/json/personagens.json";
import Banner from "./Componentes/Banner";

function App() {
  // Largura mínima dos blocos dos personagens
  const minLargura = 300;

  return (
    <>
      <Banner/>
      <Carrossel
        personagens={personagens}
        minLargura={minLargura}
      />
    </>
  );
}

export default App;
