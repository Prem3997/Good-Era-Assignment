import { BrowserRouter as Router } from "react-router-dom";
import Card from "./Components/Card";
import NavigationBar from "./Components/NavigationBar";
import SearchBar from "./Components/SearchBar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <SearchBar />
        <div className="card">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Router>
    </div>
  );
}
