import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container} from 'reactstrap';
import {H6, H2, ShadowFrame} from "../style/style";

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
                        <div className={'bg-primary p-3 border'}>
                            <H6>{question}</H6>
                        </div>
                    ),
                    content: (
                        <div className={'bg-secondary p-3'}>
                            <p className={'mb-0'}>{answer}</p>
                        </div>
                    )
                });
            }
        }

        return (
            <section className={'section section-faq mb-3'}>
                <Container>
                    <ShadowFrame>
                        <H2 className={'display-3 text-center mt-3 mb-5'}>שאלות נפוצות</H2>
                        <Accordion sections={accordionItems}
                                   color={'primary'}/>
                    </ShadowFrame>
                </Container>
            </section>
        )
    }
}

export default Faq;