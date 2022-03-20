import './App.css';
import CharactersList from './components/charactersList';
import logo from './images/RickAndMorty.png'

function App() {
  
  return (
    <>
      <header>
        <div className='d-flex justify-content-center mt-4'>
          <img className="App-logo" src={logo} alt="Rick and Morty"/>
        </div>
        <CharactersList/>
      </header>
    </>
  );
}

export default App;
