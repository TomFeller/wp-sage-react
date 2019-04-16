import React from 'react';
import {PageWrapper} from "../../templates/page-wrapper.jsx";
import {Container, FontSize, Gutter} from "../../style/style";
import Modal from "./modal";
import Button from "../button/button";

class ModalExamples extends React.Component {
    render() {
        return (
            <PageWrapper>

                {this.state && this.state.openModal === 'test' &&
                <Modal id={'test'}
                       className={'test'}
                       closeModal={() => {
                           this.setState({
                               openModal: false
                           })
                       }}>
                    test
                </Modal>
                }

                {this.state && this.state.openModal === 'testing' &&
                <Modal id={'testing'}
                       className={'testing'}
                       closeModal={() => {
                           this.setState({
                               openModal: false
                           })
                       }}>
                    testing
                </Modal>
                }

                <Container>

                    <Button data-modal-id={'test'}
                            onClick={() => {
                                this.setState({
                                    openModal: 'test'
                                })
                            }}>
                        test
                    </Button>


                    <Button data-modal-id={'testing'}
                            onClick={() => {
                                this.setState({
                                    openModal: 'testing'
                                })
                            }}>
                        testing
                    </Button>


                </Container>
            </PageWrapper>
        );
    }
}

export default ModalExamples;