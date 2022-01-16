import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Navbar />
        <Main />
    </div>
  );
}

export default App;
