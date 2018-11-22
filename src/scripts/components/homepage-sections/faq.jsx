import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container} from 'reactstrap';
import {H6, H3, ShadowFrame} from "../style/style";

import Accordion from "../utils/accordion/accordion";

class Faq extends React.Component {
    render() {

        const faqPage = DataStore.getPageBySlug('faq');
        const accordionItems = [];
        for (let i = 1; i < 6; i++) {
            const {question, answer} = faqPage.acf[i];

            if (question !== '') {
                accordionItems.push({
                    header: <H6>{question}</H6>,
                    content: <p>{answer}</p>
                });
            }
        }

        return (
            <section className={'section section-faq mb-3'}>
                <Container>
                    <ShadowFrame>
                        <H3>שאלות נפוצות</H3>
                        <Accordion sections={accordionItems}/>
                    </ShadowFrame>
                </Container>
            </section>
        )
    }
}

export default Faq;