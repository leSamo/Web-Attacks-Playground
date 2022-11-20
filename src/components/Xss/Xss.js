import React, { useState } from 'react';
import { Alert, Button, Card, CardBody, Stack, StackItem, Text, TextArea, TextContent, TextVariants } from '@patternfly/react-core';
import Comment from './Comment';
import VulnerableHtmlInjector from 'dangerously-set-html-content'

const Xss = () => {
    const [newCommentValue, setNewCommentValue] = useState("");

    const [comments, setComments] = useState([{
        username: "Linuxer1337",
        content: "I'd just like to interject for a moment. What you're refering to as <b>Linux</b>, is in fact, <b>GNU/Linux</b>, or as I've recently taken to calling it, GNU plus <b>Linux</b>. <b>Linux</b> is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX. \n\n Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called <b>Linux</b>, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.",
        points: -6,
        hasUpvoted: false,
        hasDownvoted: false,
        date: "Mon Nov 18 2022 18:15:28 GMT+0100 (Central European Standard Time)"
    }, {
        username: "Josh",
        content: "I couldn't agree more",
        points: -1,
        hasUpvoted: false,
        hasDownvoted: false,
        date: "Mon Nov 19 2022 12:39:01 GMT+0100 (Central European Standard Time)"
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
                </TextContent>
                <Stack hasGutter>
                    {comments.map(({ username, content, points, hasUpvoted, hasDownvoted, date }, index) =>
                        <Comment
                            key={index}
                            username={username}
                            content={<VulnerableHtmlInjector html={content} />}
                            points={points + Number(hasUpvoted) - Number(hasDownvoted)}
                            hasDownvoted={hasDownvoted}
                            hasUpvoted={hasUpvoted}
                            voteUp={() => setComments(Object.assign([], comments, { [index]: { ...comments[index], hasUpvoted: true, hasDownvoted: false } }))}
                            voteDown={() => setComments(Object.assign([], comments, { [index]: { ...comments[index], hasUpvoted: false, hasDownvoted: true } }))}
                            date={date}
                        />
                    )}

                    <StackItem style={{ marginTop: 32 }}>
                        <TextContent>
                            <Text component={TextVariants.h6}>
                                Add a new comment
                            </Text>
                        </TextContent>

                        <Alert style={{ marginTop: 16, marginBottom: 16 }} variant="info" isInline title="New: You can now use HTML tags to format your messages!" />

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

            </CardBody>
        </Card>
    );
};

export default Xss;