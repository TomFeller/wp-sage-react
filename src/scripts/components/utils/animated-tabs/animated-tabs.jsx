import React from 'react';
import styled from 'styled-components';
import {Container} from 'reactstrap';
import {HBox, Element} from 'react-stylesheet';
import {Colors, FontSize, Gutter, Viewport} from "../../../style/variables";
import Image from "../image/image";
import BackgroundImage from "../image/background-image";
import '../../../style/css/animated-tabs.css';

class AnimatedTabs extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            activeTab: 0
        };

        this.switchTab = this.switchTab.bind(this);
    }

    componentDidUpdate() {
        const {activeTab} = this.props;
        if (activeTab === 1) {
            this.setState({
                activeTab: activeTab ? activeTab : this.state.activeTab
            });
        }
    }

    switchTab(e) {
        const index = e.target.getAttribute('data-index');
        this.setState({
            activeTab: parseInt(index)
        })
    }

    render() {
        const {activeTab} = this.state;
        const {tabs} = this.props;
        return (
            <TabsWrapper className={'animated-tabs'} position={'relative'} id={'animated-tabs'}>
                <h2 className={'text-center scroll-element tabs-title'} style={title}>
                    {activeTab === 0 ? 'once upon a time' : 'NICE TO MEET YOU'}
                </h2>
                <HBox justifyContent={'center'} className={'tabs scroll-element'}>
                    {tabs.map((tab, t) => {
                        return (
                            <Element className={`tab ${activeTab === t ? 'active' : ''}`}
                                     data-index={t} onClick={this.switchTab} key={t}>
                                {tab.label}
                            </Element>
                        )
                    })}
                </HBox>

                <Element className={'tabs-sections scroll-element'} position={'relative'}
                         height={'auto'}
                         marginTop={Gutter.md}
                         overflow={'hidden'}>
                    <SectionsWrapper style={{...sectionWrapper, left: `${activeTab * '-100'}vw`}}>
                        {tabs.map((tab, t) => {
                            return (
                                <Element key={t}
                                         className={`tabs-section ${activeTab === t ? 'active' : ''}`}
                                         style={{...tabs_section, opacity: activeTab === t ? 1 : 0}}>
                                    <Container fluid={this.props.container === 'fluid'}
                                               style={{display: activeTab !== t && 'none'}}>
                                        {tab.section}
                                    </Container>
                                </Element>
                            )
                        })}
                    </SectionsWrapper>
                </Element>


            </TabsWrapper>
        )
    }
}

export default AnimatedTabs;

const TabsWrapper = styled.div`
    width: 100%;
    
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    .tabs-title {
         font-size: ${FontSize.md};
    }
    .tab {
        font-size: ${FontSize.md};
        padding-bottom: ${Gutter.xxs};
        margin-left: ${Gutter.md};
        margin-right: ${Gutter.md};
        cursor: pointer;
        color: #151515;
        font-weight: bold;
        &.active {
            border-bottom: .3rem solid #ffb100; 
            // font-weight: bold;
        }
    }
    
    @media screen and (min-width: ${Viewport.sm}) {
        // height: calc(100vh - 85px);
        .tabs-title {
            font-size: ${FontSize.xl};
        }
        
    }
`;

const sectionWrapper = {
    display: 'flex',
    position: 'relative',
    top: '0',
    width: '200vw',
    transition: 'left .5s'
};

const tabs_section = {
    width: '100vw',
    height: '100%',
    // padding: '3rem 0',
    transition: 'opacity .5s'
};

const SectionsWrapper = styled.div`
    display: flex; 
    position: relative;
    top: 0;
    left: ${props => props.left};
    // height: 100%;
    width: 200vw;
    transition: left .5s;
    .tabs-section {
        width: 100vw;
        height: 100%;
        opacity: 0;
        // padding: 3rem 0;
        transition: opacity .5s;
        &.active {
            opacity: 1;
        }
    }
`;


const title = {
    fontWeight: 'bold',
    // fontSize: FontSize.md,
    marginBottom: '3rem',
    textTransform: 'uppercase'
};