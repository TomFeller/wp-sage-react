import React from 'react';
import DataStore from '../flux/stores/DataStore.js'
import classnames from "classnames";
import Archive from "./templates/archive";
import {PageWrapper} from "./templates/page-wrapper.jsx";
import {Container, Button} from 'reactstrap';
import {Card, CardTitle, CardText, CardImg, CardBody, CardSubtitle} from 'reactstrap';

import Slider from "./utils/slider/Slider";
import Accordion from "./utils/accordion/accordion";
import Tabs from "./utils/tabs/tabs";
import TooltipItem from "./utils/tooltip/tooltip";
import PopoverItem from "./utils/popover/popover";

class Home extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('home');
        const items = [
            {
                src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                altText: 'Slide 1',
                caption: 'Slide 1'
            },
            {
                src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                altText: 'Slide 2',
                caption: 'Slide 2'
            },
            {
                src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
                altText: 'Slide 3',
                caption: 'Slide 3'
            }
        ];
        const accordion = [{
            header: <h2>HEADER</h2>,
            content: <div>CONTENT</div>
        }, {
            header: <h3>HEADER 2</h3>,
            content: <p>CONTENT 2</p>
        }, {
            header: <h4>HEADER 3</h4>,
            content: <section>CONTENT 3</section>
        }, {
            header: <div>HEADER 4</div>,
            content: <div>CONTENT 4</div>
        }];


        const tabsItems = [{
            label: 'tab1',
            content: <Card body>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
            </Card>
        }, {
            label: 'tab2',
            content: 'BLAAAAA'
        }];

        return (
            <PageWrapper>

                <Slider items={items}/>

                <Container>

                    <Archive title={'Archive'}/>

                    <Accordion className={'test'}
                               sections={accordion}
                               sectionActive={2}
                               color={'warning'}
                               collapsible
                               minOne/>

                    <Tabs items={tabsItems}/>


                    <TooltipItem label={<p>Somewhere in here is a <span style={{color: "blue"}}
                                                                        id={'tooltipExample'}>tooltip</span>.</p>}
                                 placement={'top'}
                                 target={'tooltipExample'}
                                 toolTipContent={'Hello :)'}/>

                    <PopoverItem target={'example'}
                                 label={'click me'}
                                 color={'primary'}
                                 placement={'top'}
                                 title={'Hello popover'}
                                 content={'This is the content'}/>

                </Container>
            </PageWrapper>
        );
    }
}

export default Home;
