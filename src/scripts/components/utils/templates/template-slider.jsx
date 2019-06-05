import React from 'react';
import {Carousel, CarouselItem} from 'reactstrap';
import Image from '../../utils/image/image';

class TemplateSlider extends React.Component {
    render() {
        const {children, width, center} = this.props;
        const {xs, sm, md, lg} = this.props;

        return (
            <div style={{
                width: width && `${width}px`,
                marginRight: center && 'auto',
                marginLeft: center && 'auto'
            }}>
                <Carousel color={'primary'} interval={false}>
                    {children.map((child, c) => {
                        return (
                            <CarouselItem key={c}>
                                {child}
                            </CarouselItem>
                        )
                    })}
                </Carousel>
            </div>
        )
    }

    static defaultProps = {
        cellSize: 4,
    }
}

export default TemplateSlider;