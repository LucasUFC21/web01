//import logo from './logo.svg';
import './App.css';

//import OlaMundo from './components/OlaMundo'
//import IMC from './components/IMC';
//import Calculadora from './components/Calculadora';
//import * as StrangerThings from "./components/StrangerThings"
//import {Vecna as V,Eleven, Will} from "./components/StrangerThings"

//import Grupo from './components/vingadores/Grupo';
//import Heroi from './components/vingadores/Heroi';

//import Pai from './components/paifilho/Pai';

import Estudante from './components/universidade/Estudante'
import Disciplina from './components/universidade/Disciplina';

//import Contador from './components/estados/Contador';
//import VotaCidades from './components/estados/VotaCidades';

/*function App() {
  return (
    <div className="App">
      <Contador />
      <VotaCidades />
    </div>
  );
}*/

function App() {
  return (
    <div className="App">
      <Disciplina titulo='Fundamentos de Programação'>
        <Estudante
          nome="Lucas Martins"
          curso="Redes de Computadores"
          universidade="UFC Quixadá"
        />

        <Estudante
          nome="Marcos Pereira"
          curso="Redes de Computadores"
          universidade="UFC Quixadá"
        />
      </Disciplina>
    </div>
  );
}

/*function App() {
  return (
    <div className="App">
      <Pai />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <Estudante
        nome="Lucas Martins"
        curso="Rdes de Computadores"
        universidade="UFC Quixadá" 
      />
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
       <Grupo titulo='Vingadores'>
        <Heroi nome='Capitão América' />
        <Heroi nome='Hulk' />
        <Heroi nome='Viúva Negra' />
        <Heroi nome='Homem de Ferro' />
        <Heroi nome='Pantera Negra' />
        <h5>Fim do time!</h5>
      </Grupo>
    </div>
  );
}*/

/*function App() {
  return (
    <div className="App">
      <OlaMundo />
      <IMC peso={100.10} altura ={1.7} />
      <Calculadora op="SUB" x={10} y={20} />
      <StrangerThings.Vecna />
      <StrangerThings.Eleven />
      <StrangerThings.Will />
    </div>
  );
}*/


export default App;
