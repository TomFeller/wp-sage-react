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
import {FontSize, Gutter} from "../style/variables";

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
            originalSwipeLocationX: e.targetTouches[0].clientX,
            originalSwipeLocationY: e.targetTouches[0].clientY,
        });
        console.log('handleTouchStart', e)
    }

    handleTouchMove(e) {
        this.setState({
            swipeMoveX: e.targetTouches[0].clientX,
            swipeMoveY: e.targetTouches[0].clientY
        })
    }

    handleTouchEnd() {
        const {swipeMoveX, swipeMoveY, originalSwipeLocationX, originalSwipeLocationY, activeSection} = this.state;
        const directionX = swipeMoveX > originalSwipeLocationX ? 1 : -1;
        const directionY = swipeMoveY - 50 > originalSwipeLocationY || swipeMoveY + 50 < originalSwipeLocationY ? 1 : -1;
        const current = parseInt(activeSection);

        console.log('directionX', directionX);
        console.log('directionY', directionY);

        if (directionY < 0) {
            if (directionX > 0) {
                this.previous();
            } else {
                this.next();
            }
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
        const {buttonBgColor, buttonColor} = this.props;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                    style={{position: 'relative', maxWidth: '35rem',}}>


                    <img src={item.src} alt={item.altText} style={{display: 'block'}}
                         onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
                         onTouchMove={touchMoveEvent => this.handleTouchMove(touchMoveEvent)}
                         onTouchEnd={(touchEndEvent) => this.handleTouchEnd(touchEndEvent)}/>

                    <div className={'mt-0 mx-auto py-5'}
                         style={{maxWidth: '40rem', display: 'inline-block', width: 'auto'}}>


                        {item.header &&
                        <h2 dangerouslySetInnerHTML={{__html: `${item.header} ${item.index ? item.index : ''}`}}
                            className={'text-center text-sm-left'}/>}

                        {item.caption && !item.buyButton &&
                        <CarouselCaption captionHeader={item.caption} captionText={''}/>}

                        {item.altText && <h4 dangerouslySetInnerHTML={{__html: item.altText}}/>}

                        {item.buyButton && <BuyButton price={item.caption}
                                                      background={item.buttonBgColor}
                                                      color={item.buttonColor}
                                                      showMessage={true}
                                                      padding={'.5rem 2rem'}
                                                      width={'auto'}/>
                        }
                    </div>

                </CarouselItem>
            );
        });

        return (
            <Carousel
                interval={false}
                ride={'carousel'}
                autoPlay={false}
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
                className={`product-mobile-slider ${!showInDesktop && 'd-md-none'} product-mobile-slider`}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex}
                                    className={'d-md-none'}/>
                {slides}
                {!this.props.hideArrows &&
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}
                                 className={'arrow'}>asd</CarouselControl>
                }
                {!this.props.hideArrows &&
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}
                                 className={'arrow'}>asd</CarouselControl>
                }
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

const indexNumber = {
    position: 'absolute',
    top: '50px',
    right: '50px',
    fontSize: FontSize.sm
}