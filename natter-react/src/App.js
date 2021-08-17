import React, { useState } from "react";
import Buzzwords from "./sections/Buzzwords";
import Nats from "./sections/Nats";
import Profile from "./sections/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          Natter
          <nav>
            <ul>
              <li>
                <Link to="/Buzzwords">Buzzwords</Link>
              </li>
              <li>
                <Link to="/Nats">Nats</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div>
          <main>
            <Switch>
              <Route path="/Buzzwords">
                <Buzzwords />
              </Route>
              <Route path="/Nats">
                <Nats />
              </Route>
              <Route path="/profile/:username">
                <RoutedProfile />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

const RoutedProfile = () => {
  const { username } = useParams();

  return <Profile username={username} />;
};

export default App;
