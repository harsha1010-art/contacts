import "./styles.css";

import { BrowserRouter as Router, useParams } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <div>
          <h1>Users</h1>
          <ul>
            <li>
              <Link to="/siddesh">Siddesh</Link>
            </li>
            <li>
              <Link to="/chetan">Chetan</Link>
            </li>
            <li>
              <Link to="/prathana">Prathana</Link>
            </li>
            <li>
              <Link to="/Harsha">Harsha</Link>
            </li>
          </ul>
        </div>
        <hr />

        <Switch>
          <Route path="/:id" children={<User />} />
        </Switch>
      </div>
    </Router>
  );
}

function User() {
  let { id } = useParams();
  return (
    <div>
      <h1>User Details page </h1>
      User Id : {id}
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
