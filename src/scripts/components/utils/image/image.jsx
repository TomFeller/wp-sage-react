import React from 'react';

class Image extends React.Component {
    render () {
        const {src, width, maxWidth} = this.props;
        return (
            <img src={src}
                 width={width}
                 style={{maxWidth: maxWidth}}/>
        )
    }
    static defaultProps = {
        src: '',
        width: '100%',
        maxWidth: '100%'
    }
}

export default Image;