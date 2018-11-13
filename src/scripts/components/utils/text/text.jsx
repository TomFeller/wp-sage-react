import React from 'react';
import {Container, PageTitle, PageContent, H1, H2, H3, H4, H5, H6} from "../../style/style";

class Text extends React.Component {
    render() {
        return (
            <Container>
                <H1>H1</H1>
                <H2>H2</H2>
                <H3>H3</H3>
                <H4>H4</H4>
                <H5>H5</H5>
                <H6>H6</H6>
                <PageTitle>PageTitle</PageTitle>
                <PageContent>PageContent</PageContent>
            </Container>
        )
    }
}

export default Text;