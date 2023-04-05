import "./App.css";
import accordionPanels from "./assets/accordionData";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <div className="App">
      <Accordion panels={accordionPanels} />
    </div>
  );
}

export default App;
