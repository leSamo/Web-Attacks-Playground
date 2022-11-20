import { Alert, Button, Card, CardBody, Text, TextContent } from '@patternfly/react-core';
import { TableComposable, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';
import React, { useEffect, useRef, useState } from 'react';

const Validation = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const [registered, setRegistered] = useState(-1);

    const PROJECTS = [{
        title: "Cookbook website",
        summary: "Create a static cookbook website containing at least 10 recipes with search functionality",
        maxRegisteredStudents: "10",
        ref: ref1
    }, {
        title: "Database dashboard",
        summary: "Create a dashboard for database admin from which they can perform SQL queries, backup and restore.",
        maxRegisteredStudents: "10",
        ref: ref2
    }, {
        title: "Bluetooth messaging",
        summary: "Create a P2P instant messaging platform using Bluetooth LE API.",
        maxRegisteredStudents: "5",
        ref: ref3
    }];

    useEffect(() => {
        PROJECTS.forEach(({ ref }) => {
            ref.current.setAttribute('disabled', '');
            ref.current.removeAttribute('aria-disabled');
        });
    }, []);

    return (
        <Card>
            <CardBody>
                <TextContent>
                    <Text component="h1">
                        Project variant registration
                    </Text>
                </TextContent>
                {registered === -1
                    ? <Alert style={{ marginTop: 16, marginBottom: 16 }} variant="danger" isInline title="Project variant selection is currently locked until tomorrow at 8:00 PM" />
                    : <Alert style={{ marginTop: 16, marginBottom: 16 }} variant="success" isInline title={`You have successfully registered project '${PROJECTS[registered].title}'.`} />
                }

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
                    {PROJECTS.map((project, index) => (
                        <Tr key={project.title}>
                            <Td dataLabel="Title">{project.title}</Td>
                            <Td dataLabel="Summary">{project.summary}</Td>
                            <Td dataLabel="Registered students">{Number(registered === index)}/{project.maxRegisteredStudents}</Td>
                            <Td dataLabel="Register"><Button variant="primary" ref={project.ref} onClick={() => {console.log("ahoj"); setRegistered(index)}}>Register</Button></Td>
                        </Tr>
                    ))}
                    </Tbody>
                </TableComposable>
            </CardBody>
        </Card>
    )
}

export default Validation;
