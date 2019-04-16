import React from 'react';
import {FontSize} from "../../../style/variables";

class Circle extends React.Component {
    render() {
        const {size, background, opacity, padding, color, border, position, fontSize, top, right, bottom, left, pointer, zIndex, onClick, index, margin} = this.props;
        return (
            <div className={'circle'}
                 style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     width: `${size}px`,
                     height: `${size}px`,
                     margin: margin && margin,
                     padding: padding,
                     borderRadius: '50%',
                     backgroundColor: background,
                     color: color,
                     fontSize: fontSize,
                     border: border,
                     position: position && position,
                     top: top && top,
                     right: right && right,
                     bottom: bottom && bottom,
                     left: left && left,
                     cursor: pointer && 'pointer',
                     zIndex: zIndex && zIndex,
                     opacity: opacity && opacity,
                     overflow: 'hidden'
                 }}
                 onClick={onClick && onClick}
                 data-index={index && index}>
                {this.props.children}
            </div>
        )
    }

    static defaultProps = {
        value: '',
        size: 50,
        background: '#000',
        color: '#fff',
        border: '0',
        fontSize: FontSize.sm,
        padding: '0'
    }
}

export default Circle;