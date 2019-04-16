import React from 'react';
import styled from 'styled-components';
import {HBox, VBox, Element} from 'react-stylesheet';
import {Row, Col} from 'reactstrap';
import DataStore from '../flux/stores/DataStore.js';
import classNames from 'classnames';
import {Colors, Container, FontFamily, FontSize, Gutter, Button, JumboTitle} from '../style/style';

class Archive extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            archiveData: []
        }
    }

    componentDidMount() {
        const {archiveType} = this.props;
        let archiveData = DataStore.getAllProducts();

        switch (archiveType) {
            case 'pages' :
                archiveData = DataStore.getAllPages();
                break;
            case 'posts' :
                archiveData = DataStore.getAllPosts();
                break;
            case 'products' :
                archiveData = DataStore.getAllProducts();
                break;
            default :
                archiveData = DataStore.getAllPosts();
        }

        this.setState({
            archiveData: DataStore.getAllProducts()
        })
    }

    render() {
        const {archiveData} = this.state,
            {title} = this.props;

        console.log('archiveData', archiveData);

        return (
            <div id='archive' className='archive' style={{backgroundColor: Colors.main}}>
                {title && <h2 className='archive-title'>{title}</h2>}
                <div className='archive-content'>
                    {archiveData.map((post, i) => {
                        const {title, subtitle, status, image} = post.acf.homepage_section;
                        return (
                            <Thumbnail key={i}
                                       className={classNames(
                                           'post',
                                           'post-' + post.id)}>
                                <Container>
                                    <Row>
                                        <Col sm={6}>
                                            <Element className={'post_title'}>
                                                <JumboTitle>{title}</JumboTitle>
                                            </Element>

                                            <VBox alignItems={'center'} className={'post_subtitle'}>
                                                <p>{subtitle}</p>
                                            </VBox>

                                            <VBox alignItems={'center'} className={'post_status'}>
                                                <p>{status}</p>
                                            </VBox>
                                        </Col>
                                        <Col sm={6} className={'post_image'}>
                                            <img src={image.url}/>
                                        </Col>
                                    </Row>
                                    <HBox justifyContent={'center'} flexWrap={'wrap'} margin={`${Gutter.lg} 0`}>
                                        <Element margin={`${Gutter.sm} ${Gutter.md}`}>
                                            <Button color={'#0975c1'}
                                                    border={'.2rem solid #0975c1'}
                                                    fontSize={'1.5rem'}>
                                                Show Me More
                                            </Button>
                                        </Element>

                                        <Element margin={`${Gutter.sm} ${Gutter.md}`}>
                                            <Button color={'#0975c1'}
                                                    border={'.2rem solid #0975c1'}
                                                    fontSize={'1.5rem'}>
                                                Wanna Buy
                                            </Button>
                                        </Element>
                                    </HBox>

                                </Container>
                            </Thumbnail>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Archive;

const Thumbnail = styled.div`
    background-color: ${Colors.main};
    border-bottom: 2rem solid #fff;
    padding: 6rem 0;
    &:last-child {
        border-bottom: 0;
    }
    .post {
        &_title {
            color: #fff;
            h3 {
                margin: ${Gutter.xs} 0;
            }
        }  
        &_subtitle {
            color: #fff;
            font-size: ${FontSize.lg};
            font-family: ${FontFamily.handWrite};
            text-transform: uppercase;  
            p {         
                margin: 0;
                text-align: center;
                font-weight: 400;
            }
        }
        &_status {
            color: #fff;
            font-size: ${FontSize.md};
            font-family: ${FontFamily.content};
        }
        &_image {
            margin-top: 5rem;
        }
    }
`;