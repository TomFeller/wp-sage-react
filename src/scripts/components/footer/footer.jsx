import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col, Card, CardTitle, CardText, Button} from 'reactstrap';
import Navigation from "../navbar/navigation";
import Articles from "../homepage-sections/articles";
import Videos from "../homepage-sections/videos";
import {FontSize, H2} from "../style/style";

class Footer extends React.Component {

    render() {
        const {color} = this.props;
        return (
            <FooterWrapper id={'site-footer'}
                    className={`site-footer
                    ${color && `bg-${color}`}`}>

                <Container>
                    <Row>

                        <Col xs={3}>
                            <Articles list/>
                        </Col>

                        <Col xs={3}>
                            <H2 className={'mt-3 mb-3'}>וידאו</H2>
                            <Videos list/>
                        </Col>

                        <Col xs={3}>
                            <H2 className={'mt-3 mb-3'}>פייסבוק</H2>
                            <p className={'font-size-xs font-weight-bold'} style={{color: '#fff', fontSize: FontSize.tiny}}>
                                אני משתף על בסיס יומיומי תובנות<br/> וחוויות אישיות שעוזרות לי להבין,<br/> להתחבר, לקבל ולאהוב אותי ואחרים,<br/> מוזמנים לעקוב אחרי.
                            </p>
                            <a href={'https://www.facebook.com/elikrasnits'}/>
                        </Col>

                        <Col xs={3}>
                            <Articles list/>
                        </Col>

                    </Row>
                </Container>

            </FooterWrapper>
        )
    }
}

export default Footer;


const FooterWrapper = styled.div`
    h2 {
        font-size: 1.2rem !important;
        font-weight: 400 !important; 
        text-align: right !important;
        color: #fff; 
    }
    p, a {
        font-size: ${FontSize.tiny};
    }
    iframe {
        width: 3rem
        height: 2.4rem;
    }
`;