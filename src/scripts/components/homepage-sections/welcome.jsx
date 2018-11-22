import React from 'react'
import {Jumbotron, Container, Row, Col, Card, CardTitle, CardText, Button} from 'reactstrap';
import DataStore from "../../flux/stores/DataStore";
import Image from "../utils/image/image";
import {ShadowFrame} from '../style/style';
import SvgBackground from "../utils/svg/svg-background";
import Header from "../header/header";

class Welcome extends React.Component {
    render() {
        const homePageData = DataStore.getPageBySlug('home');

        const featuredImage = homePageData._embedded['wp:featuredmedia']['0'].source_url,
            title = homePageData.title.rendered,
            content = homePageData.content.rendered;

        return (
            <section className={'section section-welcome mb-5'} style={{position: 'relative'}}>
                <Container>
                    <ShadowFrame padding={'10rem 2rem'}>

                        <div style={{position: 'absolute', top: '0', left: '0', width: '100%', zIndex: '0'}}>
                            <SvgBackground/>
                        </div>
                        <Row className={'align-items-center justify-content-between no-border'}>
                            <Col md={6}>
                                <Card body className={'text-right border-0'} color={'transparent'}>
                                    <CardTitle>{title}</CardTitle>
                                    <CardText dangerouslySetInnerHTML={{__html: content}}/>
                                    <Button>קרא עוד</Button>
                                </Card>
                            </Col>
                            <Col md={6} className={'text-center'}>
                                <Image src={featuredImage} width={'80%'}/>
                            </Col>
                        </Row>
                    </ShadowFrame>
                </Container>
            </section>
        )
    }
}

export default Welcome;