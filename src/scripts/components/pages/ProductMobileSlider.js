import React from 'react';
import {UncontrolledCarousel} from 'reactstrap';
import '../../style/css/mobile-carrousel.css';

class ProductMobileSlider extends React.Component {
    render() {
        return (
            <UncontrolledCarousel items={this.props.items} className={'d-sm-none product-mobile-slider'}/>
        )

    }
}

export default ProductMobileSlider;