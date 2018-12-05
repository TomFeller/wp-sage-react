import React from 'react';
import {SiteContent} from "../../templates/page-wrapper.jsx";
import { FontSize, Gutter} from "../../style/style";
  import {Container, Button } from 'reactstrap';

  class ButtonExamples extends React.Component {
    render() {
        return (
            <SiteContent>
                <Container>
                    <Button color="primary">primary!</Button>
                    <Button color="secondary">secondary!</Button>
                    <Button color="success" outline >success!</Button>
                    <Button color="warning">warning!</Button>
                    <Button color="info">info!</Button>
                    <Button color="danger">Danger!</Button>
                </Container>
            </SiteContent>
        );
    }
}

export default ButtonExamples;