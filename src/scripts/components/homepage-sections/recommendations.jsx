import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import Archive from "../templates/archive";
import Slider from "../utils/slider/Slider";
import Image from "../utils/image/image";
import {FontSize} from "../style/style";
import DataActions from "../../flux/actions/DataActions";

class Recommendations extends React.Component {
    constructor(props) {
        super(props);

        const allRecommendations = DataStore.getAllRecommendations();

        this.state = {
            allRecommendations: [],
            sliderItems: []
        };
    }


    componentDidMount() {
        DataActions.getAllReccomendations((allReccomendations) => {
            const sliderItems = allReccomendations.map((rec, r) => {
                const featuredImage = rec._embedded['wp:featuredmedia']['0'].source_url,
                    title = rec.title.rendered,
                    content = rec.content.rendered;
                return (
                    <Row key={r} style={{height: '24rem'}}>
                        <Col sm={4}>
                            <Image src={featuredImage}/>
                        </Col>
                        <Col sm={8}>
                            <Card className={'text-right border-0'}>
                                <CardBody>
                                    <CardTitle dangerouslySetInnerHTML={{__html: title}}/>
                                    <CardText dangerouslySetInnerHTML={{__html: content}}
                                              style={{fontSize: FontSize.sm}}/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                )
            });

            this.setState({
                sliderItems: sliderItems
            })
        })
    }

    render() {
        const {sliderItems} = this.state;
        return (
            <section className={'section section-recommendations my-5'}>
                <Container>
                    <Slider items={sliderItems}/>
                </Container>
            </section>
        )
    }
}

export default Recommendations;