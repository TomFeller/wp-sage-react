import React from 'react';
import {PageWrapper} from "../../templates/page-wrapper.jsx";
import {Container, FontSize, Gutter} from "../../style/style";
  import { Button } from 'reactstrap';

  class ButtonExamples extends React.Component {
    render() {
        return (
            <PageWrapper>
                <Container>
                    <Button color="danger">Danger!</Button>
                </Container>
            </PageWrapper>
        );
    }
}

export default ButtonExamples;