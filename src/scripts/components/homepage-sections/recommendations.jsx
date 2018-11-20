import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container, Media} from 'reactstrap';
import Archive from "../templates/archive";
import Slider from "../utils/slider/Slider";

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
        const sliderItems = allRecommendations.map((recommendation, r) => {

        const featuredImage = recommendation._embedded['wp:featuredmedia']['0'].source_url;
            return ({
                src: featuredImage,
                altText: recommendation.title.rendered,
                caption: <div dangerouslySetInnerHTML={{__html: recommendation.content.rendered}}/>
            })
        });

        this.setState({
            sliderItems: sliderItems
        })
    }

    render() {
        const {sliderItems} = this.state;
        return (
            <div className={'recommendations'}>
                <Container>
                    <Slider items={sliderItems}/>
                </Container>
            </div>
        )
    }
}

export default Recommendations;