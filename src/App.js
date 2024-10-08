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
          This project is coded by
          <a href="https://surekhapalanisamy.netlify.app/">Surekha</a> and is
          <a href="https://github.com/SurekhaSath/dictionary">
            open sourced in git hub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
