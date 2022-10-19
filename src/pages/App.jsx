import logo from '../assets/logo.svg';
import '../styles/App.css';

import Header from '../components/Header';
import Item from "../components/Item";

function App() {

  const listItem = [
    {
      nama: "naruto",
      diskripsi: "anime action",
      img: ".....",
    },
    {
      nama: "naruto",
      diskripsi: "anime action",
      img: ".....",
    },
    {
      nama: "naruto",
      diskripsi: "anime action",
      img: ".....",
    },
    {
      nama: "naruto",
      diskripsi: "anime action",
      img: ".....",
    },
  ];

  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
