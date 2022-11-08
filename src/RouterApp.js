import "./styles.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
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
