import updatesfav from "./updatesfav.png";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={updatesfav} className="App-logo img-fluid" alt="logo" />
          <h1>Dictionary</h1>
        </header>
        <Dictionary />
        <footer>
          This project is coded by Surekha and is open sourced in git hub
        </footer>
      </div>
    </div>
  );
}

export default App;
