import React, { useState, useEffect } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap'//API 사용
import 'bootstrap/dist/css/bootstrap.min.css';
// import Map from './Map'
import Home from './Home';
import OccurrenceStatus from './OccurrenceStatus';
import ConfirmPersonInfo from './ConfirmPersonInfo';
import ConfirmPersonPathMap from './ConfirmPersonPathMap';

const App = () => {


  return (
    <div className="App">
      <Router>
        <div>
          <Container fluid className="container">
            <Row>
              <Col>
                <Link to="/">
                  <Button variant="warning">
                    <span>Home</span>
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link to="/OccurrenceStatus">
                  <Button variant="warning">
                    <span>발생 현황</span>
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link to="/ConfirmPersonInfo">
                  <Button variant="warning">
                    <span>확진자 정보</span>
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link to="/ConfirmPersonPathMap">
                  <Button variant="warning">
                    <span>확진자 이동경로 맵</span>
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>

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

export default App