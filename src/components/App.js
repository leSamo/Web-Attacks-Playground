import React, { Fragment, useState } from 'react';
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
    "/csrf": {
      tabName: "CSRF (Cross-site request forgery)",
      component: <Csrf />,
      attackDescription: <p>Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they’re currently authenticated. With a little help of social engineering (such as sending a link via email or chat), an attacker may trick the users of a web application into executing actions of the attacker’s choosing. If the victim is a normal user, a successful CSRF attack can force the user to perform state changing requests like transferring funds, changing their email address, and so forth. If the victim is an administrative account, CSRF can compromise the entire web application.</p>,
      tryItYourself: <p>You have received a suspicious e-mail which mentions that your password has been changed, but you don't remember doing that. The suspicious e-mail cointans a link "Password reset". You don't think the e-mail is legit, but you click the button out of curiosity. What could go wrong?</p>,
      solution: <p>Click the "Password reset" button inside the e-mail. The link redirected you to password reset page, but something is wrong.
        There is a notification telling you that password has just been changed successfully. The attacker crafted a malicious link that submitted password change request on your behalf and because you were logged into your account, the browser injected your authentification token into the request.
      </p>,
      howToPrevent: <p>For any security checks that are performed on the client side, ensure that these checks are duplicated on the server side. Attackers can bypass the client-side checks by modifying values after the checks have been performed, or by changing the client to remove the client-side checks entirely. Then, these modified values would be submitted to the server.</p>
    },
    "/xss": {
      tabName: "XSS (Cross-site scripting)",
      component: <Xss />,
      attackDescription: <Fragment><p>Cross-Site Scripting (XSS) attacks are a type of injection, in which malicious scripts are injected into otherwise benign and trusted websites. XSS attacks occur when an attacker uses a web application to send malicious code, generally in the form of a browser side script, to a different end user.</p><p>
        An attacker can use XSS to send a malicious script to an unsuspecting user. The end user’s browser has no way to know that the script should not be trusted, and will execute the script. Because it thinks the script came from a trusted source, the malicious script can access any cookies, session tokens, or other sensitive information retained by the browser and used with that site. These scripts can even rewrite the content of the HTML page.
      </p></Fragment>,
      tryItYourself: <p>You are on an internet discussion forum. Try to inject such JavaScipt code into the page that shows a modal window with text &quot;XSS attack&quot;.</p>,
      solution: <p>This website contains a text area where users can enter a new comment and post it. It supports HTML tags so users can format their comments. Implementation of this feature is vulnerable to XSS attacks, as it does not check which HTML tags are used. In particular, script tag can be used to execute JavaScript code on other users&#39; devices. Paste the following HTML code snippet into new comment text area and submit the comment.
        <CodeBlock style={{ marginTop: 16, marginBottom: 16 }}>
          <CodeBlockCode id="code-content">{"<script>alert(\"XSS attack\")</script>"}</CodeBlockCode>
        </CodeBlock>
      This code will now execute in every user's browser when your message is loaded. Obviously this code is harmless, but what could have happened if your intents very malicious?
        </p>,
      howToPrevent: <p>The primary defenses against XSS are described in the <a href="https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" target="_blank" rel="noopener noreferrer">OWASP XSS Prevention Cheat Sheet</a>. Also, it’s crucial that you turn off HTTP TRACE support on all web servers. An attacker can steal cookie data via Javascript even when document.cookie is disabled or not supported by the client. As a website developer you should keep in mind the worst case scenario. Not sanitizing webpage input, even when you trust your users, is dangerous. User input usually should generally not be interpreted as code. In the odd case it is, dangerout HTML tags, like the script tag should be escaped to prevent XSS. Using an existing library for input sanitization is usually a better idea than creating a solution by yourself.</p>
    },
    "/missingServerSideValidation": {
      tabName: "Missing server-side validation",
      component: <Validation />,
      attackDescription: <p>TODO</p>,
      tryItYourself: <p>This website is missing server-side validation, try to exploit this vulnerability by registering the &quot;Cookbook website&quot; project variant</p>,
      solution: <p>This website tries to prevent students from registering project variant by disabling buttons until registration is open for everyone. However disabled buttons on the client-side can easily be enabled using the developer console by removing the <tt>disabled</tt> attribute from <tt>&lt;button&gt;</tt> element. If the reliance is completely on client-side with no server-side validation whatsoever, vulnerability might be easily exploitable.</p>,
      howToPrevent: <p>TODO</p>
    },
    "/bruteforce": {
      tabName: "Bruteforce",
      component: <Bruteforce />,
      attackDescription: <p>A brute force attack uses trial-and-error to guess login info, encryption keys, or find a hidden web page. Hackers work through all possible combinations hoping to guess correctly.
        These attacks are done by ‘brute force’ meaning they use excessive forceful attempts to try and ‘force’ their way into your private account(s).</p>,
      tryItYourself: <p>You are presented with a login prompt to an admin dashboard. Try to get access to the dashboard without the knowledge of the correct passcode.</p>,
      solution: <p>
        To perform a bruteforce attack, number should be inserted
        into passcode field along with clicking the Submit button
        repeatedly. This can be performed by injecting JavaScript code
        into the in-browser Console (in so-called DevTools), accesible by pressing F12 on the keyboard.

        In JavaScript, element can be selected using:
        <CodeBlock style={{ marginTop: 16, marginBottom: 16 }}>
          <CodeBlockCode id="code-content">{"document.getElementById(<ELEMENT_ID>);"}</CodeBlockCode>
        </CodeBlock>
        Attacker needs to
        select two elements – passcode input field and submit button.
        Browser DevTools make figuring out ids of elements very
        simple. Selected elements provide methods for manipulation.
        The following code enters passcode 1234 and clicks submit
        button:
        <CodeBlock style={{ marginTop: 16, marginBottom: 16 }}>
          <CodeBlockCode id="code-content">{"document.getElementById('password').value = 1234;\ndocument.getElementById('submit').click();"}</CodeBlockCode>
        </CodeBlock>
      </p>,
      howToPrevent: <p>TODO</p>
    },
    "/sqlInjection": {
      tabName: "SQL injection",
      component: <Sqli />,
      attackDescription: <p>
        A SQL injection attack consists of insertion or “injection” of a SQL query via the input data from the client to the application. A successful SQL injection exploit can read sensitive data from the database, modify database data (Insert/Update/Delete), execute administration operations on the database (such as shutdown the DBMS), recover the content of a given file present on the DBMS file system and in some cases issue commands to the operating system. SQL injection attacks are a type of injection attack, in which SQL commands are injected into data-plane input in order to affect the execution of predefined SQL commands.

        SQL injection attack occurs when:
        <ul>
          <li>
            An unintended data enters a program from an untrusted source.
          </li>
          <li>
            The data is used to dynamically construct a SQL query
          </li>
        </ul>

        SQL injection attacks allow attackers to spoof identity, tamper with existing data, cause repudiation issues such as voiding transactions or changing balances, allow the complete disclosure of all data on the system, destroy the data or make it otherwise unavailable, and become administrators of the database server.
      </p>,
      tryItYourself: "This is a searchable list of items in Hardware store of your rival. Try to find a way to access admin account, so you can sabotage its operations. Your gut instrincts tell you there might be a table called 'passwords' which might hide something interesting.",
      solution: <p>
        Search input field is missing proper input validation and therefore can be used as an attack vector. Input field contents are injected into database query regardless of its content. The query might look something like this:
        <CodeBlock style={{ marginTop: 16, marginBottom: 16 }}>
          <CodeBlockCode id="code-content">{"SELECT * FROM items WHERE title = '<USER_INPUT>';"}</CodeBlockCode>
        </CodeBlock>
        By maliciously crafting a query we can abuse this oversight and access contents of other tables in database. Keep in mind that in SQL, everything that comes after <b><code>--</code></b> is considered a comment and is ignored. Try entering <b><code>'; --</code></b> into the input field. This will malform the query into:
        <CodeBlock style={{ marginTop: 16, marginBottom: 16 }}>
          <CodeBlockCode id="code-content">{"SELECT * FROM items WHERE title = '';"} <span style={{ color: '#989898' }}>--';</span></CodeBlockCode>
        </CodeBlock>
        If SQL injection is not possible, no data will be returned, because no items match <b><code>'; --</code></b>, but if attack is possible, all items will be returned as we have terminated previous SQL statement early and commented out the rest of the original statement. You'll see that in this case injection is possible. We can now try to access the <code>passwords</code> table. We can try to append results from passwords table to regular items displayed in the table. UNION operator can be used to join two SELECT statements together. But be careful: both statements have to have the same number of columns. With a quick glance at the table we can assume that regular query selects 5 columns. We shall craft a query probing passwords table with 5 columns as well. For that null columns can be used.
        <CodeBlock style={{ marginTop: 16, marginBottom: 16 }}>
          <CodeBlockCode id="code-content">{"SELECT * FROM items WHERE title = '';"} <span style={{ color: '#989898' }}>--';</span></CodeBlockCode>
        </CodeBlock>
      </p>,
      howToPrevent: <p>
        Easiest SQL injection prevention technique is using so-called parametrized queries. Parametrized queries use placeholders in place of data which will be provided by the user. User data is automatically escapped and SQL injection attacks of this type are mitigated.
      </p>
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
                <SplitItem style={{ width: 500, overflow: 'auto' }}>
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
                <SplitItem isFilled style={{ border: "dashed 5px red", margin: 16, padding: 16, overflow: 'auto' }}>
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
