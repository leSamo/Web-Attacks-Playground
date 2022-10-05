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
import { Card, CardBody, CodeBlock, CodeBlockCode, Split, SplitItem, Text, TextContent } from '@patternfly/react-core';

const App = () => {
  const paths = {
    "/clickjacking": {
      tabName: "Clickjacking"
    },
    "/sqlInjection": {
      tabName: "SQL injection"
    },
    "/xss": {
      tabName: "XSS (Cross site scripting)",
      component: <Xss />,
      attackDescription: <p>Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user.</p>,
      tryItYourself: <p>This website contains a text area where users can enter a new comment and post it. It supports HTML tags so users can format their comments. Implementation of this feature is vulnerable to XSS attacks, as it does not check which HTML tags are used. In particular, script tag can be used to execute JavaScript code on other users&#39; devices. Paste the following HTML code snippet into new comment text area and submit the comment.<CodeBlock>
      <CodeBlockCode id="code-content">{"<script>alert(\"XSS attack\")</script>"}</CodeBlockCode>
    </CodeBlock></p>,
      howToProtect: <p>The primary defenses against XSS are described in the <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">OWASP XSS Prevention Cheat Sheet</a>. Also, it’s crucial that you turn off HTTP TRACE support on all web servers. An attacker can steal cookie data via Javascript even when document.cookie is disabled or not supported by the client.</p>
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
        {Object.entries(paths).map(([urlPath, { tabName, component, attackDescription, tryItYourself, howToProtect }], index) =>
          <Route exact path={urlPath} key={index + 1}>
            <Wrapper navIndex={index + 1} paths={paths}>
              <Split style={{ minHeight: "100%" }}>
                <SplitItem style={{ width: 400 }}>
                  <Card style={{ minHeight: "100%" }}>
                    <CardBody>
                      <TextContent>
                        <Text component="h2">
                          {tabName}
                        </Text>
                        <Text component="h3">
                          About the attack
                        </Text>
                        <Text component="p" style={{ textAlign: "justify" }}>
                          {attackDescription}
                        </Text>
                        <Text component="h3">
                          Try it yourself
                        </Text>
                        <Text component="p" style={{ textAlign: "justify" }}>
                          {tryItYourself}
                        </Text>
                        <Text component="h3">
                          How to protect
                        </Text>
                        <Text component="p" style={{ textAlign: "justify" }}>
                          {howToProtect}
                        </Text>
                      </TextContent>
                    </CardBody>
                  </Card>
                </SplitItem>
                <SplitItem isFilled style={{ border: "dashed 5px red", margin: 16, padding: 16 }}>
                  {component}
                </SplitItem>
              </Split>
            </Wrapper>
          </Route>
        )}
      </Switch>
    </Router>
  )
}

export default App;
