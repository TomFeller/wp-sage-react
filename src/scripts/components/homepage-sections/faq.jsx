import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container} from 'reactstrap';
import {H6, SectionTitle, ShadowFrame} from '../style/style';

import Accordion from "../utils/accordion/accordion";

class Faq extends React.Component {
    render() {

        const faqPage = DataStore.getPageBySlug('faq');
        const accordionItems = [];
        for (let i = 1; i < 6; i++) {
            const {question, answer} = faqPage.acf[i];

            if (question !== '') {
                accordionItems.push({
                    header: (
                        <div
                            className={`bg-primary p-3 border border-left-0 border-right-0 border-dark ${i === 1 ? 'border-top-0' : ''}`}>
                            <H6>{question}</H6>
                        </div>
                    ),
                    content: (
                        <div className={'bg-white p-3 border border-left-0 border-right-0 border-dark'}>
                            <p className={'mb-0'} dangerouslySetInnerHTML={{__html: answer}}/>
                        </div>
                    )
                });
            }
        }

        return (
            <section className={'section section-faq mb-3'}>
                <Container>
                    <ShadowFrame>
                        <SectionTitle className={'display-3 text-center mt-3 mb-5'}>שאלות נפוצות</SectionTitle>
                        <Accordion sections={accordionItems}
                                   color={'primary'}
                                   collapsible/>
                    </ShadowFrame>
                </Container>
            </section>
        )
    }
}

export default Faq;