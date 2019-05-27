import React from 'react';
import styled from 'styled-components';
import DataStore from '../flux/stores/DataStore.js'
import {HBox, VBox, Element} from 'react-stylesheet';
import {PageWrapper, JumboTitle, ResponsiveHalf, FontFamily, FontSize, Gutter, Viewport} from '../style/style';
import {Container, Row, Col} from 'reactstrap';
import Image from "./utils/image/image";
import '../style/css/member.css';

class Team extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            memberActive: 0
        };

        this.memberHover = this.memberHover.bind(this);
    }

    memberHover(index) {
        const {memberActive} = this.state;

        this.setState({
            memberActive: parseInt(memberActive) === parseInt(index) ? '' : parseInt(index)
        })

    }

    render() {
        const {homepage} = this.props,
            pageData = DataStore.getPageBySlug('team'),
            members = [pageData.acf.member1, pageData.acf.member2, pageData.acf.member3, pageData.acf.member4];
        const {memberActive} = this.state;

        console.log('members', members);
        return (
            <Element className={'team scroll-element'}
                // background={'#f5f5f5'}
                //          style={{height: '640px'}}
            >
                {/*<JumboTitle color={'#000'}*/}
                {/*responsive>*/}
                {/*{pageData.title.rendered}*/}
                {/*</JumboTitle>*/}

                {/*<div dangerouslySetInnerHTML={{__html: pageData.content.rendered}}/>*/}
                <Container>
                    <Row>

                        <Col md={6}>
                            <Member active={true} className={'member member-active'}>
                                <Element>
                                    <HBox alignItems={'flex-end'}>
                                        <Element position={'relative'}>
                                            <Image src={members[memberActive].image}
                                                   width={'80px'}
                                                   className={'member_image'}/>
                                        </Element>
                                        <Element paddingLeft={Gutter.sm}>
                                            <h2 className={'member_name'}>{members[memberActive].name}</h2>
                                            <h3 className={'member_role'}>{members[memberActive].role}</h3>
                                        </Element>
                                    </HBox>
                                    <Element marginTop={Gutter.sm}>
                                        <p style={{fontSize: FontSize.sm}}
                                           dangerouslySetInnerHTML={{__html: members[memberActive].content}}/>
                                    </Element>
                                </Element>
                            </Member>
                        </Col>

                        <Col md={6}>
                            <HBox flexWrap={'wrap'} justifyContent={'space-between'}>
                                {members.map((member, i) => {
                                    const {name, role, content, image} = member;
                                    return (
                                        <Member key={i} className={'member'} id={`member-${i}`}>
                                            <VBox alignItems={'center'} className={'member'}>
                                                <Element width={'100%'}
                                                         position={'relative'}
                                                         onClick={() => {
                                                             i !== memberActive && this.memberHover(i);
                                                             if (window.innerWidth < 768) window.location.href = '/#member-2'
                                                         }}
                                                    // onMouseOver={this.memberHover}
                                                >

                                                    <Image src={image}
                                                           width={'100%'}
                                                           className={'member_image'}
                                                    />
                                                    {/*<div dangerouslySetInnerHTML={{__html: content}}*/}
                                                    {/*className={'member_content'}*/}

                                                    {/*style={{display: 'none', opacity: memberActive === i && 1}}/>*/}
                                                </Element>
                                                {/*<Element textAlign={'center'}>*/}
                                                {/*<h4 className={'member_name'}>{name}</h4>*/}
                                                {/*</Element>*/}
                                            </VBox>
                                        </Member>

                                    )
                                })}
                            </HBox>
                        </Col>

                    </Row>
                </Container>

            </Element>
        );
    }
}

const Member = styled.div`
    width: 47%;
    
    
    ${props => props.active && `
        display: flex;
        padding: 4rem;
        width: 100%;
        height: 100%;
    `}
    
    @media screen and (min-width: ${Viewport.xs_l}) {
        width: ${props => props.active ? '100%' : '47%'};
    }
    .member {
        &_name {
            font-family: ${FontFamily.title};
            font-size: ${FontSize.sm};
            margin: 1rem 0;
        }
        &_role {
            font-size: ${FontSize.xs};
            margin: 0;
        } 
        &_content {
            font-family: ${FontFamily.content};
            font-size: ${FontSize.sm};
            margin: 0;
            opacity: 0;
            position: absolute;
            top: 0;
            // background: rgba(0,0,0,.8);
            color: #fff;
            padding: ${Gutter.md};
            width: 100%;
            height: 100%;
            transition: .5s opacity;
            cursor: pointer;
        }
        
        &_image {
        
        }
        
    }
     
`;


export default Team;
