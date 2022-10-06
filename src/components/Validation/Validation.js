import { Alert, Card, CardBody, Text, TextContent } from '@patternfly/react-core';
import React from 'react';

// Rekreácia WISu, kde sa registrujú predmety a tlačidlá sa odomknú až zajtra
const Validation = () => {
    return (
        <Card>
            <CardBody>
                <TextContent>
                    <Text component="h1">
                        Project
                    </Text>
                </TextContent>
                <Alert style={{ marginTop: 16 }} variant="danger" isInline title="Project variant selection is unlocking tomorrow at 8:00 PM" />
            </CardBody>
        </Card>
    )
}

export default Validation;
