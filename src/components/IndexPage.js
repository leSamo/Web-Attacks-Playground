import React from 'react';
import { Button, Card, CardBody, Text, TextContent } from '@patternfly/react-core';
import { ArrowRightIcon } from '@patternfly/react-icons';

const IndexPage = () => {
    const goToFirstVulnerability = () => {
        window.location = "/csrf";
      }

    return (
        <Card style={{ height: '100%' }}>
            <CardBody>
                <TextContent>
                    <Text component="h1">
                        Web attack playground
                    </Text>
                    <Text component="p">
                        Web app which has web vulnerabilites embedded with guides with gamification elements on how to exploit them. Goal of this app and paper is to present these vulnerabilities in a user-friendly way and enable hands-on approach how to identify them to raise awareness of these issues.                   
                    </Text>
                    <Text component="h2">
                        How it works
                    </Text>
                    <Text component="p">
                        In each task, you will be presented with a different vulnerable website and an assignment. Description of the vulnerability to use is available. Use the vulnerability inside the website to complete the assignment. If you ever get stuck there is a step by step guide to each task, in the "Solution" tab. Read "Prevention" tab to find out how could this vulnerability have been avoided.
                    </Text>
                    <Text component="h2">
                        Recommendations
                    </Text>
                    <Text component="p">
                        <ul>
                            <li>
                                Please use Google Chrome or Firefox browser, other browser might not work correctly.
                            </li>
                            <li>
                                You can reset your current attack by refreshing the page.
                            </li>
                            <li>
                                Start from the beginning, tasks are ordered from the easiest to hardest.
                            </li>
                        </ul>
                    </Text>
                </TextContent>

                <Button style={{ marginTop: 32 }} variant="primary" isLarge onClick={goToFirstVulnerability}>
                    Go to your first task <ArrowRightIcon />
                </Button>
            </CardBody>
        </Card>
    );
};

export default IndexPage;