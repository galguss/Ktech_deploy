import './App.css';

//components
import Header from './components/main/Header';
import Main from './components/main/Main';
import Pooter from './components/main/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Pooter/>
    </div>
  );
}

export default App;
