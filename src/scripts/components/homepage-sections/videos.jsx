import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import Archive from "../templates/archive";
import Slider from "../utils/slider/Slider";
import Image from "../utils/image/image";
import styled from 'styled-components';
import {Gutter, H2} from "../style/style";

class Videos extends React.Component {
    constructor(props) {
        super(props);

        const allVideos = DataStore.getAllVideos();

        this.state = {
            allVideos: allVideos,
            sliderItems: []
        };
    }

    componentDidMount() {
        const {allVideos} = this.state;
        const sliderItems = allVideos.map((video, v) => {
            console.log('video', video);
            return (
                <div key={v} className={'video-thumbnail'}>
                    <div dangerouslySetInnerHTML={{__html: video.acf.url}}/>
                </div>
            )
        });

        this.setState({
            sliderItems: sliderItems
        })
    }

    render() {
        const {sliderItems} = this.state;
        return (
            <section className={'section section-videos my-5'}>
                <Container>
                    <H2 className={'archive-title display-3 text-center mt-3 mb-5'}>סרטונים והדרכות</H2>
                    <VideosSlider>
                    {sliderItems}
                    </VideosSlider>
                </Container>
            </section>
        )
    }
}

export default Videos;

const VideosSlider = styled.div`
    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;
   
    .video-thumbnail {
        display: inline-block;
        margin-left: ${Gutter.sm}
        iframe {
            width: 300px;
            height: 220px;
        }
    }
`;
