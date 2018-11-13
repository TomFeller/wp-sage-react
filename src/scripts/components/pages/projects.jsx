import React from 'react';
import {HBox, VBox, Element} from 'react-stylesheet';
import DataStore from '../../flux/stores/DataStore.js'
import classnames from "classnames";

class About extends React.Component {
    render() {
        const pageData = DataStore.getPageBySlug('about');


        const PrimaryBtn = props => <Btn {...props} primary />;

        const Btn = ({ className, primary, ...props }) => (
            <button
                type="button"
                className={classnames("btn", primary && "btn-primary", className)}
                {...props}
            />
        );
        return (
            <Page className={'about-us'} background={'#cdcdcd'}>
                <h1>{pageData.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}}/>
            </Page>
        );
    }
}

export default About;