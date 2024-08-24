import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <Dictionary />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/IsabellaInglis"
          target="_blank"
          rel="noreferrer"
        >
          Isabella Inglis
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/IsabellaInglis/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://dictionary-search-react-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
