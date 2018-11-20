import React from 'react'
import {Jumbotron, Container, Row, Col, Card, CardTitle, CardText, Button} from 'reactstrap';
import DataStore from "../../flux/stores/DataStore";
import Image from "../utils/image/image";

class Welcome extends React.Component {
    render() {
        const homePageData = DataStore.getPageBySlug('home');

        const featuredImage = homePageData._embedded['wp:featuredmedia']['0'].source_url,
            title = homePageData.title.rendered,
            content = homePageData.content.rendered;

        return (
            <section className={'section section-welcome mb-3'}>
                <Jumbotron>
                    <Container>
                        <Row className={'align-items-center justify-content-between no-border'}>
                            <Col md={6}>
                                <Card body className="text-right" color={'transparent'}>
                                    <CardTitle>{title}</CardTitle>
                                    <CardText dangerouslySetInnerHTML={{__html: content}}/>
                                    <Button>קרא עוד</Button>
                                </Card>
                            </Col>
                            <Col md={6} className={'text-center'}>
                                <Image src={featuredImage} width={'80%'}/>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </section>
        )
    }
}

export default Welcome;