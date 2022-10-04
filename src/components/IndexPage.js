import React from 'react';
import { Card, CardBody, Text, TextContent } from '@patternfly/react-core';

const IndexPage = () => {
    return (
        <Card>
            <CardBody>
                <TextContent>
                    <Text component="h1">
                        What is this
                    </Text>
                    <Text component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis turpis eget suscipit ultrices. Vivamus bibendum, ligula vel feugiat vulputate, eros nibh egestas elit, nec volutpat mi eros sodales sapien. Maecenas vitae nulla ac arcu molestie aliquet quis vel quam. Cras luctus ex nec dictum scelerisque. Proin ante urna, faucibus vehicula scelerisque eget, vulputate a purus. Fusce aliquam mattis lorem id cursus. Duis molestie efficitur libero, semper gravida enim ultricies eget. Nunc dapibus nisl massa, sed imperdiet nulla consequat id. Duis ultricies sollicitudin eros accumsan luctus. Vestibulum pretium congue felis ac rhoncus.
                    </Text>
                    <Text component="h1">
                        How it works
                    </Text>
                    <Text component="p">
                    Aliquam facilisis interdum mi eget condimentum. Integer rhoncus pharetra volutpat. Praesent pharetra pretium pellentesque. Nulla faucibus dictum arcu vel auctor. Praesent cursus orci in turpis rutrum, et mattis lorem commodo. Donec consectetur sem nunc, sed facilisis nunc laoreet vestibulum. Fusce convallis pharetra felis condimentum dignissim. Proin cursus tempus magna, ut convallis tortor ultricies sit amet. Ut egestas purus ac convallis molestie. In posuere interdum pulvinar. Proin augue justo, sodales ac auctor consectetur, gravida non ipsum. Morbi id pellentesque est. Sed tempus, nisi et ornare gravida, sapien nulla egestas quam, eu venenatis nulla ex non enim. Morbi eu iaculis nisl, sit amet ornare sem. Nullam suscipit vitae ex eu luctus. Mauris luctus sit amet massa consectetur condimentum.
                    </Text>
                </TextContent>
            </CardBody>
        </Card>
    );
};

export default IndexPage;