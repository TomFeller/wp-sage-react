import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container} from 'reactstrap';
import {H4, H2} from "../style/style";

import Accordion from "../utils/accordion/accordion";

class Faq extends React.Component {
    render() {

        const faqPage = DataStore.getPageBySlug('faq');
        const accordionItems = [];
        for (let i = 1; i < 6; i++) {

            const item = faqPage.acf[i];
            if (item.question !== '') {
                accordionItems.push({
                    header: <H4>{item.question}</H4>,
                    content: <p>{item.answer}</p>
                });
            }

        }

        return (
            <section className={'section section-faq mb-3'}>
                <Container>
                    <H2 className={'display-2'}>שאלות נפוצות</H2>
                    <Accordion sections={accordionItems}/>
                </Container>
            </section>
        )
    }
}

export default Faq;