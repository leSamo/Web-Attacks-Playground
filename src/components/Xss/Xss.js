import React, { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Stack, StackItem, Text, TextArea, TextContent, TextVariants } from '@patternfly/react-core';
import Comment from './Comment';
import VulnerableHtmlInjector from 'dangerously-set-html-content'

const Xss = () => {
    const [newCommentValue, setNewCommentValue] = useState("");

    const [comments, setComments] = useState([{
        username: "User 1",
        content: "This is a comment",
        points: 6,
        hasUpvoted: false,
        hasDownvoted: false
    }, {
        username: "User 2",
        content: "This is <b>another</b> comment",
        points: 3,
        hasUpvoted: false,
        hasDownvoted: false
    }])

    const addNewComment = () => {
        const newComment = {
            username: "anonymous",
            content: newCommentValue,
            points: 0,
            hasUpvoted: false,
            hasDownvoted: false
        };

        setNewCommentValue("");

        setComments([...comments, newComment])
    }

    return (
        <Card>
            <CardBody>
                <TextContent>
                    <Text component="h1">
                        Discussion
                    </Text>
                    <Stack hasGutter>
                        {comments.map(({ username, content, points, hasUpvoted, hasDownvoted }, index) =>
                            <Comment
                                key={index}
                                username={username}
                                content={<VulnerableHtmlInjector html={content} />}
                                points={points + Number(hasUpvoted) - Number(hasDownvoted)}
                                hasDownvoted={hasDownvoted}
                                hasUpvoted={hasUpvoted}
                                voteUp={() => setComments(Object.assign([], comments, { [index]: { ...comments[index], hasUpvoted: true, hasDownvoted: false } }))}
                                voteDown={() => setComments(Object.assign([], comments, { [index]: { ...comments[index], hasUpvoted: false, hasDownvoted: true } }))}
                            />
                        )}

                        <StackItem style={{ marginTop: 32 }}>
                            <Text component={TextVariants.h6}>
                                Add a new comment
                            </Text>
                            <TextArea
                                value={newCommentValue}
                                onChange={value => setNewCommentValue(value)}
                                resizeOrientation="vertical"
                                aria-label="comment"
                                style={{ minHeight: 60 }}
                                placeholder="Type comment..."
                            />
                            <Button style={{ marginTop: 16 }} variant="primary" isDisabled={newCommentValue.length === 0} onClick={addNewComment}>Submit comment</Button>
                        </StackItem>
                    </Stack>
                </TextContent>
            </CardBody>
        </Card>
    );
};

export default Xss;