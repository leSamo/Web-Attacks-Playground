import { Alert, Button, Card, CardBody, Text, TextContent } from '@patternfly/react-core';
import { TableComposable, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';
import React from 'react';

const Validation = () => {
    const PROJECTS = [{
        title: "Cookbook website",
        summary: "Create a static cookbook website containing at least 10 recipes with search functionality",
        registeredStudents: "0/10"
    }, {
        title: "Database dashboard",
        summary: "Create a dashboard for database admin from which they can perform SQL queries, backup and restore.",
        registeredStudents: "0/10"
    }, {
        title: "Bluetooth messaging",
        summary: "Create a P2P instant messaging platform using Bluetooth LE API.",
        registeredStudents: "0/5"
    }];

    return (
        <Card>
            <CardBody>
                <TextContent>
                    <Text component="h1">
                        Project
                    </Text>
                </TextContent>
                <Alert style={{ marginTop: 16, marginBottom: 16 }} variant="danger" isInline title="Project variant selection is currently locked until tomorrow at 8:00 PM" />

                <TableComposable>
                    <Thead>
                    <Tr>
                        <Th>Title</Th>
                        <Th>Summary</Th>
                        <Th>Registered students</Th>
                        <Th>Register</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {PROJECTS.map(project => (
                        <Tr key={project.title}>
                            <Td dataLabel="Title">{project.title}</Td>
                            <Td dataLabel="Summary">{project.summary}</Td>
                            <Td dataLabel="Registered students">{project.registeredStudents}</Td>
                            <Td dataLabel="Register"><Button variant="primary" isDisabled>Register</Button></Td>
                        </Tr>
                    ))}
                    </Tbody>
                </TableComposable>
            </CardBody>
        </Card>
    )
}

export default Validation;
