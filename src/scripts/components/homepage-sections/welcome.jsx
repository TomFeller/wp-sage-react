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
            <div className={'welcome'}>
                <Jumbotron>
                    <Container>
                        <Row className={'align-items-center no-border'}>
                            <Col md={6}>
                                <Image src={featuredImage} width={'80%'}/>
                            </Col>
                            <Col md={6}>
                                <Card body className="text-right" color={'transparent'}>
                                    <CardTitle>{title}</CardTitle>
                                    <CardText dangerouslySetInnerHTML={{__html: content}}/>
                                    <Button>קרא עוד</Button>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default Welcome;