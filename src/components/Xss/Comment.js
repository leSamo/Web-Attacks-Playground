import { Card, CardBody, Split, SplitItem } from '@patternfly/react-core';
import React from 'react';
import RatingPanel from './RatingPanel';

const Comment = ({ username, content, points, hasUpvoted, hasDownvoted, voteUp, voteDown, date }) => {
    return (
        <Card style={{ marginBottom: 16 }}>
            <CardBody>
                <Split style={{ width: "100%" }}>
                    <SplitItem>
                        <RatingPanel points={points} hasUpvoted={hasUpvoted} hasDownvoted={hasDownvoted} voteUp={voteUp} voteDown={voteDown} />
                    </SplitItem>
                    <SplitItem style={{ fontSize: 16, width: "100%" }}>
                        <Split>
                            <SplitItem>
                                {username}
                                <span style={{ color: 'gray' }}> • {date ? new Date(date).toLocaleString("cs-CZ") : "Just now"}</span> <br />
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
