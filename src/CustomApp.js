import { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    let currentComponent;

    switch (currentPage) {
      case "home":
        currentComponent = <Home />;
        break;
      case "about":
        currentComponent = <About />;
        break;
      case "dashboard":
        currentComponent = <Dashboard />;
        break;
      default:
        currentComponent = <Home />;
    }

    return currentComponent;
  };
  return (
    <div className="App">
      <div>
        <ul className="navbar">
          <li onClick={() => setCurrentPage("home")}>Home</li>
          <li onClick={() => setCurrentPage("about")}>About</li>
          <li onClick={() => setCurrentPage("dashboard")}>Dashboard</li>
        </ul>
      </div>
      <hr />

      {renderPage()}
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About PAGE</h1>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard PAGE</h1>
    </div>
  );
}
