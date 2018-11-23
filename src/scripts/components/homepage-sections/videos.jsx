import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {HBox} from 'react-stylesheet';
import {Container, Row, Col, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import Archive from "../templates/archive";
import Slider from "../utils/slider/Slider";
import Image from "../utils/image/image";
import styled from 'styled-components';
import {FontSize, Gutter, H2} from "../style/style";
import {FaPlayCircle} from 'react-icons/fa';

class Videos extends React.Component {
    constructor(props) {
        super(props);

        const allVideos = DataStore.getAllVideos();

        this.state = {
            allVideos: allVideos,
            sliderItems: [],
            isList: this.props.list
        };
    }

    componentDidMount() {
        const {allVideos, isList} = this.state;
        const sliderItems = allVideos.map((video, v) => {
            console.log('video', video);
            return (
                <div key={v} className={'video-thumbnail'}>
                    {isList ?
                        <Row className={'mb-2'}>
                            <Col xs={3} className={'pl-0 pr-3'}>
                                <Thumbnail>
                                    <img src={video.acf.thumbnail}/>
                                    <FaPlayCircle size={20}/>
                                </Thumbnail>
                            </Col>
                            <Col xs={9} className={'pr-1'}>
                                <div style={{fontSize: FontSize.tiny, color: '#fff'}}
                                     className={'font-weight-bold'}
                                     dangerouslySetInnerHTML={{__html: video.title.rendered}}/>
                            </Col>
                        </Row>
                        :
                        video.acf.url ?
                            <div dangerouslySetInnerHTML={{__html: video.acf.url}}/>
                            :
                            <HBox>
                                <img src={video.acf.thumbnail}
                                             width={'auto'}
                                             height={220}
                                             className={'display-block'}/>
                            </HBox>
                    }
                </div>
            )
        });

        this.setState({
            sliderItems: sliderItems
        })
    }

    render() {
        const {sliderItems, isList} = this.state;
        return (
            <section className={`section section-videos ${isList ? 'my-3' : 'my-5'}`}>
                <Container className={isList ? 'px-0' : ''}>

                    {isList ?
                        <div>{sliderItems}</div>
                        :
                        <VideosSlider>
                            <H2 className={'archive-title display-3 text-center mt-3 mb-5'}>סרטונים והדרכות</H2>
                            {sliderItems}
                        </VideosSlider>}
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
    
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #f3f3f3; 
    }
    &::-webkit-scrollbar {
        height: .3rem;
        background-color: #c83e81;
        width: .5rem; 
    }
    &::-webkit-scrollbar-thumb {
        background-color: #c83e81; 
    }
   
    .video-thumbnail {
        display: inline-block;
        margin-left: ${Gutter.sm}
        iframe {
            width: 300px;
            height: 220px;
        }
    }
`;

const Thumbnail = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    overflow: hidden;
    margin-left: 1rem;
    img {
        width: 100%;
        height: auto;
        display: block;
    }
    svg {
        position: absolute;
        z-index: 1;
    } 
`;
