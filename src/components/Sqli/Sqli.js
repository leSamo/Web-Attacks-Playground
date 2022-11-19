import { Button, Card, CardBody, Split, SplitItem, Text, TextContent, TextInput } from '@patternfly/react-core';
import { TableComposable, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

// TODO add reset search button

const Sqli = () => {
    const [searchValue, setSearchValue] = useState("");
    const [items, setItems] = useState([]);

    const query = (value) => {
        const sql = `SELECT * FROM items WHERE LOWER(title) LIKE '%${value.toLowerCase()}%';`;

        axios.get("/sql", { params: { sql } }).then(response => {
            console.log(response.data);
            setItems(response.data.map(item => Object.values(item)));
        }).catch(error => {
            console.error(error)
        });
    }

    useEffect(() => {
        query('');
    }, []);

    return (
        <Card style={{ padding: 16 }}>
            <CardBody>
                <TextContent>
                    <Text component="h1">
                        Hardware store
                    </Text>
                </TextContent>
                <Split hasGutter style={{ marginTop: 24, marginBottom: 24 }}>
                    <SplitItem>
                        <TextInput
                            value={searchValue}
                            type="text"
                            onChange={value => setSearchValue(value)}
                            style={{ width: 700 }}
                        />
                    </SplitItem>
                    <SplitItem>
                        <Button variant="primary" onClick={() => query(searchValue)}>Search</Button>
                    </SplitItem>
                </Split>

                <TableComposable>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Product code</Th>
                            <Th>Item description</Th>
                            <Th>Price</Th>
                            <Th>Stock</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {items.map(item => (
                            <Tr>
                                {item.map(cell => <Td>
                                    {cell}
                                </Td>
                                )}
                            </Tr>
                        ))}
                    </Tbody>
                </TableComposable>
            </CardBody>
        </Card>
    )
}

export default Sqli;
