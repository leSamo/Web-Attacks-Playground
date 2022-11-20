import { Alert, Bullseye, Button, Card, CardBody, Stack, StackItem, Text, TextContent, TextInput } from '@patternfly/react-core';
import React, { Fragment, useRef, useState } from 'react';

const Bruteforce = () => {
    const [passcode, setPasscode] = useState(null);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const ref = useRef(null);

    const validate = () => {
        const p = ref.current.value;

        if (p === "2318") {
            setLoggedIn(true);
        }
    }

    return (
        <Card style={{ height: '100%' }}>
            <CardBody>
                <Bullseye>
                    <Stack hasGutter style={{ backgroundColor: '#d4e1ff', padding: 32, height: 250, width: 400, boxShadow: 'rgba(3,3,3, 0.12) 5px 5px 2px 0px' }}>
                        <StackItem>
                            <TextContent>
                                <Text component="h1" style={{ textAlign: 'center' }}>
                                    Admin dashboard login
                                </Text>
                            </TextContent>
                        </StackItem>
                        {isLoggedIn ?
                            <Alert style={{ marginTop: 16, marginBottom: 16 }} variant="success" isInline title="You have successfully logged into admin dashboard panel." />
                            : (
                                <Fragment>
                                    <StackItem>
                                        <TextInput
                                            isDisabled
                                            value="admin"
                                            type="text"
                                            placeholder="Type in username..."
                                            id="username"
                                        />
                                    </StackItem>
                                    <StackItem>
                                        <TextInput
                                            value={passcode}
                                            type="number"
                                            onChange={value => setPasscode(value)}
                                            placeholder="Type in passcode..."
                                            id="password"
                                            ref={ref}
                                        />
                                    </StackItem>
                                    <StackItem>
                                        <Bullseye>
                                            <Button variant="primary" onClick={validate} id="submit">Submit</Button>
                                        </Bullseye>
                                    </StackItem>
                                </Fragment>
                            )}
                    </Stack>
                </Bullseye>
            </CardBody>
        </Card>
    )
}

export default Bruteforce;
