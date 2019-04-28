import React from 'react';
import {UncontrolledCarousel} from 'reactstrap';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import '../../style/css/mobile-carrousel.css';

class ProductMobileSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({activeIndex: nextIndex});
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
        this.setState({activeIndex: nextIndex});
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({activeIndex: newIndex});
    }

    render() {
        const {activeIndex} = this.state;
        const {items} = this.props;
        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText}/>
                    <CarouselCaption captionHeader={item.caption} captionText={''}/>
                    <h3 dangerouslySetInnerHTML={{__html: item.altText}}/>
                </CarouselItem>
            );
        });

        return (
            <Carousel
                autoPlay={false}
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                className={'product-mobile-slider d-md-none product-mobile-slider'}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
                {slides}
                {/*<CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>*/}
                {/*<CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>*/}
            </Carousel>
        );
    }

// render() {
//     return (
//         <UncontrolledCarousel items={this.props.items} className={'d-sm-none product-mobile-slider'}/>
//     )
//
// }
}

export default ProductMobileSlider;