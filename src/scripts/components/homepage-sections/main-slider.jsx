import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Slider from "../utils/slider/Slider";
import DataStore from "../../flux/stores/DataStore";
import {VBox} from 'react-stylesheet';
import Image from "../utils/image/image";
import {FontSize, Gutter, H2, H3} from "../style/style";

class MainSlider extends React.Component {
    constructor(props) {
        super(props);

        const homePageData = DataStore.getPageBySlug('home');
        const itemsArray = [homePageData.acf.slide_1, homePageData.acf.slide_2, homePageData.acf.slide_3, homePageData.acf.slide_4, homePageData.acf.slide_5];

        this.state = {
            sliderData: itemsArray.map((item, i) => {
                return (
                    {
                        title: item.title,
                        credit: item.credit,
                        subtitle: item.subtitle,
                        image: item.image,
                        backgroundImage: item['background_image'],
                        key: i
                    }
                )
            })
        }
    }

    render() {
        const {sliderData} = this.state;


        const sliderItems = sliderData.filter(item => item.title !== '').map((item) => {
            const {key, title, credit, subtitle, image, backgroundImage} = item;
            return (
                <Row key={key} style={{height: '24rem'}}>
                    {image &&
                    <Col sm={4} className={'p-0'}>
                        <Image src={image} height={'100%'}/>
                    </Col>
                    }
                    <Col sm={image ? 8 : 12} className={'p-0'}
                         style={{background: `url(${backgroundImage}) no-repeat center center /cover`}}>
                        <VBox className={'p-5'}
                              justifyContent={'space-between'}
                              style={{
                                  backgroundColor: 'rgba(255,255,255,.8)', width: '100%', height: '100%'
                              }}>
                            <H3 className={'font-weight-bold'}>{title}</H3>
                            <H3 className={'display-3 text-left'}>
                                {credit}
                                <p className={'mt-3 font-weight-bold text-left'}
                                   style={{fontSize: FontSize.xxs}}>
                                    {subtitle}
                                </p>
                            </H3>
                        </VBox>
                    </Col>
                </Row>
            )
        });

        return (
            <div>
                <Container>
                    <Slider items={sliderItems}/>
                </Container>
            </div>
        )
    }
}

export default MainSlider;