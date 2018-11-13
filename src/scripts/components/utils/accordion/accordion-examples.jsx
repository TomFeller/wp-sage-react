import React from 'react';
import DataStore from '../../../flux/stores/DataStore.js'
import {Page} from '../../templates/page.jsx';
import {PageWrapper} from "../../templates/page-wrapper.jsx";
import Accordion from "./accordion.jsx";
import {Container} from "../../style/style";

class AccordionExamples extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const pageData = DataStore.getPageBySlug('test');

        const objects = [{
            header: 'number 1',
            content: 'blabla'
        }, {
            header: 'number 2',
            content: 'blibli'
        }, {
            header: 'number 3',
            content: 'bloblo'
        }];

        const htmls = [{
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

        return (
            <PageWrapper>
                <Container>
                    <Accordion className={'test'}
                               sections={htmls}
                               sectionActive={2}
                               colors={{
                                   header: {color: '#fff', background: '#000'},
                                   headerActive: {color: '#f4f4f4', background: '#333'},
                                   headerHover: {color: '#f2f2f2', background: '#666'},
                                   content: {color: '#fff', background: '#000'}
                               }}
                               collapsible
                               minOne/>
                </Container>
            </PageWrapper>
        );
    }
}

export default AccordionExamples;