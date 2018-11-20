import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import Archive from "../templates/archive";
import Slider from "../utils/slider/Slider";
import Image from "../utils/image/image";

class Recommendations extends React.Component {
    constructor(props) {
        super(props);

        const allRecommendations = DataStore.getAllRecommendations();

        this.state = {
            allRecommendations: allRecommendations,
            sliderItems: []
        };
    }

    componentDidMount() {
        const {allRecommendations} = this.state;
        const sliderItems = allRecommendations.map((rec, r) => {
            const featuredImage = rec._embedded['wp:featuredmedia']['0'].source_url,
                title = rec.title.rendered,
                content = rec.content.rendered;
            return (
                <Row key={r}>
                    <Col sm={3}>
                        <Image src={featuredImage}/>
                    </Col>
                    <Col sm={9}>
                        <Card className={'text-right'}>
                            <CardBody>
                                <CardTitle>{title}</CardTitle>
                                <CardText dangerouslySetInnerHTML={{__html: content}}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            )
        });

        this.setState({
            sliderItems: sliderItems
        })
    }

    render() {
        const {sliderItems} = this.state;
        return (
            <section className={'section section-recommendations mb-3'}>
                <Container>
                    <Slider items={sliderItems}/>
                </Container>
            </section>
        )
    }
}

export default Recommendations;