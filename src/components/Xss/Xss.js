import React, { useState } from 'react';
import { Button, Card, CardBody, CardFooter, Stack, StackItem, Text, TextArea, TextContent, TextVariants } from '@patternfly/react-core';
import Comment from './Comment';
import InnerHTML from 'dangerously-set-html-content'

const Xss = () => {
    const [newCommentValue, setNewCommentValue] = useState("");
/*
    const [comments, setComments] = useState([{
        username: "User 1",

    }])
    */

    const html = `
    <div>This wil be rendered</div>
    <script>
      alert('testing')
    </script>

  `

    return (
        <Card>
            <CardBody>
                <TextContent>
                <Stack hasGutter>
                    <Comment username="User 1" content={<div dangerouslySetInnerHTML={{"__html": "ahoj<b>ahoj</b><script>console.log(\"ahoj\");</script>"}} />} points={1} hasDownvoted />
                    <Comment username="User 2" content={<InnerHTML html={html} />} points={6} hasUpvoted />

                    <StackItem>
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
                        <Button style={{ marginTop: 16 }} variant="primary" isDisabled={newCommentValue.length === 0} onClick={() => console.log("ahoj")}>Submit comment</Button>
                    </StackItem>
                </Stack>
                </TextContent>
            </CardBody>
        </Card>
    );
};

export default Xss;