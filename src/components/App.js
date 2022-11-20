import React, { useState } from 'react';
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
import { Button, Card, CardBody, CodeBlock, CodeBlockCode, Split, SplitItem, Tab, Tabs, Text, TextContent } from '@patternfly/react-core';
import { ArrowRightIcon } from '@patternfly/react-icons';
import Csrf from './Csrf/Csrf';
import Sqli from './Sqli/Sqli';
import Bruteforce from './Bruteforce/Bruteforce';

const App = () => {
  const PATHS = {
    "/sqlInjection": {
      tabName: "SQL injection",
      component: <Sqli />,
      tryItYourself: "This is a searchable list of items in Hardware store of your rival. Try to find a way to access admin account, so you can sabotage its operations.",
      solution: <p>
      Search input field is missing proper input validation and therefore can be used as an attack vector. Input field contents are injected into database query regardless of its content. The query might look something like this:
      <CodeBlock style={{ marginTop: 16, marginBottom: 16 }}>
        <CodeBlockCode id="code-content">{"SELECT * FROM items WHERE title = '<USER_INPUT>';"}</CodeBlockCode>
      </CodeBlock>
      By maliciously crafting a query we can abuse this oversight and access contents of other tables in database. Try entering <b><code>'; --</code></b> into the input field. This will malform the query into:
      <CodeBlock style={{ marginTop: 16, marginBottom: 16 }}>
        <CodeBlockCode id="code-content">{"SELECT * FROM items WHERE title = '';"} <span style={{ color: '#989898' }}>--';</span></CodeBlockCode>
      </CodeBlock>
      </p>
    },
    "/bruteforce": {
      tabName: "Bruteforce",
      component: <Bruteforce />
    },
    "/xss": {
      tabName: "XSS (Cross site scripting)",
      component: <Xss />,
      attackDescription: <p>Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user.</p>,
      tryItYourself: <p>Try to inject such JavaScipt code into the page that shows a modal window with text &quot;XSS attack&quot;.</p>,
      solution: <p>This website contains a text area where users can enter a new comment and post it. It supports HTML tags so users can format their comments. Implementation of this feature is vulnerable to XSS attacks, as it does not check which HTML tags are used. In particular, script tag can be used to execute JavaScript code on other users&#39; devices. Paste the following HTML code snippet into new comment text area and submit the comment.
      <CodeBlock style={{ marginTop: 16, marginBottom: 16 }}>
        <CodeBlockCode id="code-content">{"<script>alert(\"XSS attack\")</script>"}</CodeBlockCode>
      </CodeBlock></p>,
      howToPrevent: <p>The primary defenses against XSS are described in the <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">OWASP XSS Prevention Cheat Sheet</a>. Also, it’s crucial that you turn off HTTP TRACE support on all web servers. An attacker can steal cookie data via Javascript even when document.cookie is disabled or not supported by the client.</p>
    },
    "/csrf": {
      tabName: "CSRF",
      component: <Csrf/>
    },
    "/missingServerSideValidation": {
      tabName: "Missing server-side validation",
      component: <Validation />,
      attackDescription: <p>Placeholder.</p>,
      tryItYourself: <p>This website is missing server-side validation, try to exploit this vulnerability by registering the &quot;Cookbook website&quot; project variant</p>,
      solution: <p>This website tries to prevent students from registering project variant by disabling buttons until registration is open for everyone. However disabled buttons on the client-side can easily be enabled using the developer console by removing the <tt>disabled</tt> attribute from <tt>&lt;button&gt;</tt> element. If the reliance is completely on client-side with no server-side validation whatsoever, vulnerability might be easily exploitable.</p>,
      howToPrevent: <p>Placeholder.</p>
    },
  }

  const [activeTab, setActiveTab] = useState(0);

  const goToNextVulnerability = () => {
    const keys = Object.keys(PATHS);
    let currentPath = window.location.pathname;
    currentPath = currentPath.substring(0, currentPath.length - 1);

    const nextIndex = keys.indexOf(currentPath) + 1;
    const nextItem = keys[nextIndex];

    //console.log(window.location.pathname, keys, nextIndex, nextItem);
    window.location = nextItem;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" key={0}>
          <Wrapper navIndex={0} paths={PATHS}>
            <IndexPage />
          </Wrapper>
        </Route>
        {Object.entries(PATHS).map(([urlPath, { tabName, component, attackDescription, tryItYourself, solution, howToPrevent }], index) =>
          <Route exact path={urlPath} key={index + 1}>
            <Wrapper navIndex={index + 1} paths={PATHS}>
              <Split style={{ minHeight: "100%" }}>
                <SplitItem style={{ width: 500 }}>
                  <Card style={{ minHeight: "100%" }}>
                    <CardBody>
                      <TextContent>
                        <Text component="h2">
                          {tabName}
                        </Text>
                      </TextContent>
                      <Tabs
                        activeKey={activeTab}
                        onSelect={(e, tab) => setActiveTab(tab)}
                        isBox
                        style={{ marginTop: 16, marginBottom: 16 }}
                      >
                        <Tab eventKey={0} title="Description">
                          <TextContent>
                            <Text component="h3">
                              About the attack
                            </Text>
                            <Text component="p" style={{ textAlign: "justify" }}>
                              {attackDescription}
                            </Text>
                          </TextContent>

                          <Button style={{ marginTop: 16 }} variant="primary" isLarge onClick={() => setActiveTab(1)}>
                            Try it yourself <ArrowRightIcon />
                          </Button>
                        </Tab>
                        <Tab eventKey={1} title="Task">
                          <TextContent>
                            <Text component="h3">
                              Try it yourself
                            </Text>
                            <Text component="p" style={{ textAlign: "justify" }}>
                              {tryItYourself}
                            </Text>
                          </TextContent>

                          <Button style={{ marginTop: 16 }} variant="primary" isLarge onClick={() => setActiveTab(2)}>
                            See the solution <ArrowRightIcon />
                          </Button>
                        </Tab>
                        <Tab eventKey={2} title="Solution">
                          <TextContent>
                            <Text component="h3">
                              Solution
                            </Text>
                            <Text component="p" style={{ textAlign: "justify" }}>
                              {solution}
                            </Text>
                          </TextContent>

                          <Button style={{ marginTop: 16 }} variant="primary" isLarge onClick={() => setActiveTab(3)}>
                            Learn how to prevent <ArrowRightIcon />
                          </Button>
                        </Tab>
                        <Tab eventKey={3} title="Prevention">
                          <TextContent>
                            <Text component="h3">
                              How to prevent
                            </Text>
                            <Text component="p" style={{ textAlign: "justify" }}>
                              {howToPrevent}
                            </Text>
                          </TextContent>
                          {index !== Object.keys(PATHS).length - 1 &&
                            <Button style={{ marginTop: 16 }} variant="primary" isLarge onClick={goToNextVulnerability}>
                              See the next task <ArrowRightIcon />
                            </Button>
                          }
                        </Tab>
                      </Tabs>
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
    </Router >
  )
}

export default App;
