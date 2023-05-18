import Card from "./components/Card";
import Accordion from "./components/Accordion";
import Table from "./components/Table";
import Checkbox from "./components/Checkbox";
import "./App.css";
import("preline");

function App() {
  return (
    <div class="container mx-auto">
      <h1>Preline react</h1>
      <div className="mb-8">
        <h2 className="mb-4">Card</h2>
        <Card />
      </div>
      <div className="mb-8">
        <h2 className="mb-4">Collapse</h2>
        <Accordion />
      </div>
      <div className="mb-8">
        <h2 className="mb-4">Checkbox</h2>
        <Checkbox />
      </div>
      <div className="mb-8">
        <h2 className="mb-4">Table</h2>
        <Table />
      </div>
    </div>
  );
}

export default App;
