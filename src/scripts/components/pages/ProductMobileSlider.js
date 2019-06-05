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
import BuyButton from "../utils/button/buy-button";

class ProductMobileSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
        this.handleTouchEnd = this.handleTouchEnd.bind(this);
    }

    handleTouchStart(e) {
        this.setState({
            originalSwipeLocation: e.targetTouches[0].clientX,
        });
        console.log('handleTouchStart', e)
    }

    handleTouchMove(e) {
        this.setState({
            swipeMove: e.targetTouches[0].clientX
        })
    }

    handleTouchEnd() {
        const {swipeMove, originalSwipeLocation, activeSection} = this.state;
        const direction = swipeMove > originalSwipeLocation ? 1 : -1;
        const current = parseInt(activeSection);
        if (direction > 0) {
            this.previous();
        } else {
            this.next();
        }
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
        const {items, showInDesktop} = this.props;
        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}>

                    <img src={item.src} alt={item.altText} style={{display: 'block'}}
                         onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
                         onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
                         onTouchEnd={(touchEndEvent) => this.handleTouchEnd(touchEndEvent)}/>

                    <div className={'mt-4 mx-auto'} style={{maxWidth: '40rem'}}>
                        {item.header && <h2 dangerouslySetInnerHTML={{__html: item.header}} className={'text-left'}/>}

                        {item.caption && !item.buyButton &&
                        <CarouselCaption captionHeader={item.caption} captionText={''}/>}

                        {item.altText && <h4 dangerouslySetInnerHTML={{__html: item.altText}}/>}

                        {item.buyButton && <BuyButton price={item.caption}
                                                      background={'#cecece'}/>
                        }
                    </div>

                </CarouselItem>
            );
        });

        return (
            <Carousel
                autoPlay={false}
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                className={`product-mobile-slider ${!showInDesktop && 'd-md-none'} product-mobile-slider`}>
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