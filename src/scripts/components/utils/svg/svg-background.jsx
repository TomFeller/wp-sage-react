import React from 'react';

class SvgBackground extends React.Component {
    render() {
        const {fill, opacity, d} = this.props;
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1048 1024" style={{height: '100%'}}>
                <path className="a"
                      fill={fill}
                      opacity={opacity}
                      d={d}/>
            </svg>
        )
    }

    static defaultProps = {
        fill: '#59a5a5',
        opacity: '.25',
        d: 'M367.19,0S640,56.31,623.91,318.77,694.26,631.54,821,690c122.2,56.37,212.55,139.21,226.58,334.42H.21V0Z'
    }
}


export default SvgBackground;