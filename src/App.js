import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <h2>What word do you want to look up?</h2>
        <Dictionary />
      </div>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/IsabellaInglis">Isabella Inglis</a>,
        open-sourced on{" "}
        <a href="https://github.com/IsabellaInglis/dictionary-app">Github</a>{" "}
        and hosted on{" "}
        <a href="https://dictionary-search-react-app.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}

export default App;
