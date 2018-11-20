import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container} from 'reactstrap';
import Archive from "../templates/archive";

class Treatments extends React.Component {
    render() {

        const allTreatments = DataStore.getAllTreatments();

        return (
            <section className={'section section-treatments mb-3'}>
                <Container>
                    <Archive max={4}
                             posts={allTreatments}
                             postSize={{
                                 sm: 6,
                                 md: 6,
                                 lg: 6
                             }}
                             title={'סדנאות'}/>
                </Container>
            </section>
        )
    }
}

export default Treatments;