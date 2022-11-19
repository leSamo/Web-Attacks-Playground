import { Alert, Card, CardBody, Menu, MenuContent, MenuItem, MenuList, Split, SplitItem, Text, TextContent } from '@patternfly/react-core';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faPaperPlane, faPencil, faReply, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { dbExecute } from '../../db';

const Csrf = () => {
    dbExecute();

    return (
        <Card>
            <CardBody>
                <Split hasGutter isFilled>
                    <SplitItem style={{ width: 150 }}>
                        <Menu activeItemId={0} style={{ height: '100%' }}>
                            <MenuContent>
                                <MenuList>
                                    <MenuItem icon={<FontAwesomeIcon icon={faInbox} style={{ width: 20 }} />} itemId={0}>
                                        Inbox
                                    </MenuItem>
                                    <MenuItem icon={<FontAwesomeIcon icon={faStar} style={{ width: 20 }} />} itemId={1}>
                                        Starred
                                    </MenuItem>
                                    <MenuItem icon={<FontAwesomeIcon icon={faPencil} style={{ width: 20 }} />} itemId={2}>
                                        Drafts
                                    </MenuItem>
                                    <MenuItem icon={<FontAwesomeIcon icon={faPaperPlane} style={{ width: 20 }} />} itemId={3}>
                                        Sent
                                    </MenuItem>
                                    <MenuItem icon={<FontAwesomeIcon icon={faTrash} style={{ width: 20 }} />} itemId={4}>
                                        Trash
                                    </MenuItem>
                                </MenuList>
                            </MenuContent>
                        </Menu>
                    </SplitItem>
                    <SplitItem style={{ marginRight: 16, width: '100%' }}>
                        <Card>
                            <CardBody>
                                <TextContent>
                                    <Text component="h1">
                                        [URGENT] Your password has been changed
                                    </Text>
                                    <Text style={{ color: 'gray' }}>
                                        <Split>
                                            <SplitItem>
                                                from: admin@3rmfcPrZlTA8Px6LVOBR.com
                                            </SplitItem>
                                            <SplitItem isFilled />
                                            <SplitItem>
                                                02:21 Tue, Nov 19th 2022 <FontAwesomeIcon icon={faStar} style={{ marginLeft: 16 }} /> <FontAwesomeIcon icon={faReply} style={{ marginLeft: 16 }} />
                                            </SplitItem>
                                        </Split>
                                        to: joedoe@mail.com
                                    </Text>
                                </TextContent>
                                <Alert style={{ marginTop: 16, marginBottom: 16 }} variant="danger" isInline title="Author of this message could not be verified, proceed with caution." />
                                <TextContent>
                                    <Text style={{ fontFamily: 'monospace' }}>
                                <b>Activity report:</b><br />
                                Your password for the account Joe Doe on Facelook has just been changed. If you do not recognize this activity, follow this link immediatelly: <br />
                                <a>Password reset</a><br /><br />

                                Sincerely<br />
                                Team Facelook
                                </Text>
                                </TextContent>
                            </CardBody>
                        </Card>
                    </SplitItem>
                </Split>
            </CardBody>
        </Card>
    )
}

export default Csrf;
