import TableComponent from "./components/TableComponent/tablecomponent";
import "./App.css";

function App() {
  const items = [1, 2, 3, 4];
  return <TableComponent items={items} title="Time spent: " />;
}

export default App;
