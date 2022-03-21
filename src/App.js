import './App.css';
import Home from './components/home';
import logo from './images/Rick_and_Morty_Logo.webp'

function App() {
  
  return (
    <>
      <header className='mt-4 mb-4'>
        <div className='d-flex justify-content-center'>
          <img className="App-logo" src={logo} alt="Rick and Morty"/>
        </div>
      </header>
      <Home/>
      <p className='text-center text-white mt-5 mb-3'>Made with ❤️ by <a className='text-success' target={'_blank'} href='https://github.com/Suffro/rickandmorty-directory'>Lorenzo Suffritti</a></p>
    </>
  );
}

export default App;
