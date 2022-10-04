import { Card, CardBody, Split, SplitItem } from '@patternfly/react-core';
import React from 'react';
import RatingPanel from './RatingPanel';

const Comment = ({ username, content, points, hasUpvoted, hasDownvoted }) => {
    return (
        <Card style={{ marginBottom: 16 }}>
            <CardBody>
                <Split style={{ width: "100%" }}>
                    <SplitItem>
                        <RatingPanel points={points} hasUpvoted={hasUpvoted} hasDownvoted={hasDownvoted} />
                    </SplitItem>
                    <SplitItem style={{ fontSize: 20, width: "100%" }}>
                        <Split>
                            <SplitItem>
                                {username}
                                <span style={{ color: 'gray' }}> • {new Date().toLocaleString("cs-CZ")}</span> <br />
                                <p style={{ marginTop: 8, fontSize: 16 }}>{content}</p>
                            </SplitItem>
                            <SplitItem isFilled />
                            <SplitItem>
                            </SplitItem>
                        </Split>
                    </SplitItem>
                </Split>
            </CardBody>
        </Card>
    )
};

export default Comment;
