import React from 'react';
import {PageWrapper} from "../../templates/page-wrapper.jsx";
import {Container, FontSize, Gutter} from "../../style/style";
import Button from "./button";

class ButtonExamples extends React.Component {
    render() {
        return (
            <PageWrapper>
                <Container>
                    <Button className={'test'}
                            size={FontSize.xxs}
                            color={'main'}
                            gutter={`${Gutter.xxs} ${Gutter.md}`}
                            onClick={() => {
                                alert('hi')
                            }}>
                        main
                    </Button>

                    <Button className={'test'}
                            size={FontSize.xs}
                            color={'sub'}
                            gutter={`${Gutter.xxs} ${Gutter.md}`}
                            onClick={() => {
                                alert('hi')
                            }}
                            active>
                        sub
                    </Button>

                    <Button className={'test'}
                            size={FontSize.sm}
                            color={'success'}
                            gutter={`${Gutter.xxs} ${Gutter.md}`}
                            onClick={() => {
                                alert('hi')
                            }}>
                        success
                    </Button>

                    <Button className={'test'}
                            size={FontSize.md}
                            color={'danger'}
                            gutter={`${Gutter.xxs} ${Gutter.md}`}
                            onClick={() => {
                                alert('hi')
                            }}>
                        danger
                    </Button>

                    <Button className={'test'}
                            size={FontSize.lg}
                            color={'action'}
                            gutter={`${Gutter.xxs} ${Gutter.md}`}
                            onClick={() => {
                                alert('hi')
                            }}>
                        action
                    </Button>

                    <Button className={'test'}
                            color={'error'}
                            size={FontSize.xl}
                            gutter={`${Gutter.xxs} ${Gutter.md}`}
                            onClick={() => {
                                alert('hi')
                            }}>
                        bla
                    </Button>
                </Container>
            </PageWrapper>
        );
    }
}

export default ButtonExamples;