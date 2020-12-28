import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Button from 'react-bootstrap/Button'//API 사용
import 'bootstrap/dist/css/bootstrap.min.css';
// import Map from './Map'

const App = () => {


  return (
    <div className="App">
      <Router>
        <div>

          <nav>
            <ul>
              <li>
                <Link to="/">
                  <Button variant="warning">
                    <span>Home</span>
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/OccurrenceStatus">
                  <Button variant="warning">
                    <span>발생 현황</span>
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/ConfirmPersonInfo">
                <Button variant="warning">
                    <span>확진자 정보</span>
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/ConfirmPersonPathMap">
                <Button variant="warning">
                    <span>확진자 이동경로 맵</span>
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/OccurrenceStatus">
              <OccurrenceStatus />
            </Route>
            <Route path="/ConfirmPersonInfo">
              <ConfirmPersonInfo />
            </Route>
            <Route path="/ConfirmPersonPathMap">
              <ConfirmPersonPathMap />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>



  )
}

function Home() {
  return <h1>대전광역시 코로나 19 현황</h1>;
}

function OccurrenceStatus() {
  return <h2>발생 현황</h2>;
}

function ConfirmPersonInfo() {
  return <h2>확진자 정보</h2>;
}

function ConfirmPersonPathMap() {
  return <h2>확진자 이동경로 맵</h2>;
}

export default App