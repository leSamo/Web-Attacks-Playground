import { Alert, Button, Card, CardBody, Text, TextContent, TextInput } from '@patternfly/react-core';
import { TableComposable, Tbody, Th, Thead, Tr } from '@patternfly/react-table';
import axios from 'axios';
import React, { useState } from 'react';

const Sqli = () => {
    const [searchValue, setSearchValue] = useState("");

    const query = () => {
        console.log("calling axios");

        axios.get("/sql").then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error(error)
        });
    }

    return (
        <Card>
            <CardBody>
                Search: 
                <TextInput
                    value={searchValue}
                    type="text"
                    onChange={value => setSearchValue(value)}
                    aria-label="error icon sprite text input example"
                />

                <Button variant="primary" onClick={() => query(searchValue)}>Search</Button>
                </CardBody>
        </Card>
    )
}

export default Sqli;
