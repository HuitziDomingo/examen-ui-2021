import './App.css';
//components
import { Characters } from './components/Characters'
//ComponentState
import CharactersState from './context/CharactersState'
//Estilos
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  return (
    <div>
      <CharactersState>
        <Characters />
      </CharactersState>
    </div>
  );
}

export default App;
