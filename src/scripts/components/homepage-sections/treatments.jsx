import React from 'react'
import DataStore from "../../flux/stores/DataStore";
import {Container} from 'reactstrap';
import Archive from "../templates/archive";
import {ShadowFrame} from '../style/style'
import SvgBackground from "../utils/svg/svg-background";

class Treatments extends React.Component {
    render() {

        const allTreatments = DataStore.getAllTreatments();

        return (
            <section className={'section section-treatments'}>
                <Container>
                    <ShadowFrame>
                        <div style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '0'}}>
                            <SvgBackground d={'M61,0S433,125,351,421C272.44,704.6,819,663,741,997c-62.35,267,292.56,226.08,306.59,514H.21V0Z'}/>
                        </div>
                        <Archive max={4}
                                 posts={allTreatments}
                                 postSize={{
                                     sm: 6,
                                     md: 6,
                                     lg: 6
                                 }}
                                 title={'סדנאות'}/>
                    </ShadowFrame>
                </Container>
            </section>
        )
    }
}

export default Treatments;