import React from 'react';
import { Stack, StackItem } from '@patternfly/react-core';
import AngleUpIcon from '@patternfly/react-icons/dist/esm/icons/angle-up-icon';
import AngleDownIcon from '@patternfly/react-icons/dist/esm/icons/angle-down-icon';

const RatingPanel = ({ hasUpvoted, hasDownvoted, points, voteUp, voteDown }) => (
    <Stack style={{ color: 'gray', marginRight: 24 }}>
        <StackItem>
            <AngleUpIcon size='xl' onClick={voteUp} style={{ cursor: 'pointer', ...hasUpvoted && {color: 'green'} }}/>
        </StackItem>
        <StackItem>
            <span style={{ display: 'inline-block', textAlign: 'center', width: 48, fontSize: 20 }}>
                {points}
            </span>
        </StackItem>
        <StackItem>
            <AngleDownIcon size='xl' onClick={voteDown} style={{ cursor: 'pointer', ...hasDownvoted && {color: 'red'} }}/>
        </StackItem>
    </Stack>
);

export default RatingPanel;
