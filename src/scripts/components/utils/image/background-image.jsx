import React from 'react';
import {Element} from 'react-stylesheet';

class BackgroundImage extends React.Component {
    render() {
        const {width, height, position, repeat, size, url} = this.props;
        return (
            <Element style={{
                width: width,
                height: height,
                backgroundPosition: position,
                backgroundRepeat: repeat,
                backgroundSize: size,
                backgroundImage: `url(${url})`
            }}/>
        )
    }

    static defaultProps = {
        width: '100%',
        height: '30rem',
        position: 'center center',
        repeat: 'no-repeat',
        size: 'cover'
    }

}

export default BackgroundImage;