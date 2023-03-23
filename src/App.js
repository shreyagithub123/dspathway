import logo from './logo.svg';
import './App.css';
import AppHeader from'./Components/Header.js'
import AppFooter from'./Components/Footer.js'

function App() {
  return (
   <div className='App'>
    <header id="header"><AppHeader/></header>
    <div>
      <footer><AppFooter/></footer>
    </div>
   </div>
   
  );
}

export default App;
