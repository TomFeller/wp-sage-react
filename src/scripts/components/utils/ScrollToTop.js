import React from 'react';
import {withRouter} from 'react-router-dom';
import {Element} from 'react-stylesheet';

class ScrollToTop extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const {paddingTop} = this.props;
        return <Element style={{minHeight: '70vh', paddingTop: paddingTop && paddingTop}} className={'mainScrollWrapper'}>
            {this.props.children}
            </Element>
    }
}

export default withRouter(ScrollToTop)