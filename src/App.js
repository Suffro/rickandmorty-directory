import './App.css';
import CharactersList from './components/charactersList';
import logo from './images/Rick_and_Morty_Logo.webp'

function App() {
  
  return (
    <>
      <header className='mt-4 mb-5'>
        <div className='d-flex justify-content-center'>
          <img className="App-logo" src={logo} alt="Rick and Morty"/>
        </div>
      </header>
      <CharactersList/>
      <p className='text-center text-white mt-5 mb-3'>Made with ❤️ by <a className='text-success' href='#'>Lorenzo Suffritti</a></p>
    </>
  );
}

export default App;
