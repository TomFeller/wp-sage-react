import React from 'react';

class Image extends React.Component {
    render () {
        const {src, width, maxWidth, style, opacity} = this.props;
        return (
            <img src={src}
                 width={width}
                 style={{...style && style, maxWidth: maxWidth, opacity: opacity}}/>
        )
    }
    static defaultProps = {
        src: '',
        width: '100%',
        maxWidth: '100%',
        opacity: 1
    }
}

export default Image;