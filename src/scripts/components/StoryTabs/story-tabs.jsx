import React from 'react';
import {Element} from 'react-stylesheet';
import AnimatedTabs from "../utils/animated-tabs/animated-tabs";
import About from "../About";
import {Gutter} from "../../style/style";
import Team from "../Team";
import {FontSize} from "../../style/variables";

class StoryTabs extends React.Component {
    render() {
        const tabs = [{
            index: 0,
            label: 'Story',
            section: <About homepage/>
        }, {
            index: 1,
            label: 'Team',
            section: <Element>
                <Team homepage/>
            </Element>
        }];
        return (
            <Element background={'#ffffff'} padding={'5rem 0 5rem'} id={'our-story'}>
                <AnimatedTabs tabs={tabs} container={'fluid'}/>
            </Element>
        )
    }
}

export default StoryTabs;
