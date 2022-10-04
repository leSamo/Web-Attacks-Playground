import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Wrapper from './Wrapper';
import IndexPage from './IndexPage';
import Xss from './Xss/Xss';
import Validation from './Validation/Validation';

const App = () => {
  const paths = {
    "/clickjacking": {
      tabName: "Clickjacking"
    },
    "/sqlInjection": {
      tabName: "SQL injection"
    },
    "/xss": {
      tabName: "XSS",
      component: <Xss />
    },
    "/crsf": {
      tabName: "CRSF"
    },
    "/phishing": {
      tabName: "Phishing"
    },
    "/sessionHijacking": {
      tabName: "Session hijacking"
    },
    "/missingServerSideValidation": {
      tabName: "Missing server-side validation",
      component: <Validation />
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" key={0}>
            <Wrapper navIndex={0} paths={paths}>
              <IndexPage />
            </Wrapper>
          </Route>
        {Object.entries(paths).map(([urlPath, { component }], index) =>
          <Route exact path={urlPath} key={index + 1}>
            <Wrapper navIndex={index + 1} paths={paths}>
              {component}
            </Wrapper>
          </Route>
        )}
      </Switch>
    </Router>
  )
}

export default App;
