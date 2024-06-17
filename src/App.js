import logo from './logo.svg';
import './App.css';
import { mkConfig, generateCsv, download } from 'export-to-csv';

function App() {

  const mockData = [
    {
      title: 'hello',
      num: 10
    },
    {
      title: 'world',
      num: 8
    }
  ];

  const config = mkConfig({useKeysAsHeaders: true});
  const csv = generateCsv(config)(mockData);
  
  return (
    <div className="App">
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
        <button onClick={() => download(config)(csv)}>Download</button>
      </header>
    </div>
  );
}

export default App;
