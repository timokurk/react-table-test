import TableComponent from "./components/TableComponent/tablecomponent";
import "./App.css";

function App() {
  const items = ["a", "b", "c", "d"];
  return <TableComponent items={items} title="cool table!" />;
}

export default App;
