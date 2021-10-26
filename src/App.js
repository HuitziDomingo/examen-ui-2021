import './App.css'

import { Characters } from './components/Characters'

import { DataProvider } from './context/DataContext'

import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  return (
    <div>
      <DataProvider>
        <Characters />
      </DataProvider>
    </div>
  );
}

export default App;
