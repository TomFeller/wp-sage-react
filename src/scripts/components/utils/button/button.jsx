import React from 'react';
import {ButtonStyle} from './button-style.jsx';
import {FontSize, Gutter} from "../../../style/style";
import '../../../style/css/button.css';

class Button extends React.Component {
    render() {
        let {props} = this,
            classNames = ['button'];

        classNames = [classNames, props.className].join(props.className ? ' button-' : '');

        return (
            <ButtonStyle {...props}
                         style={{
                             ...props.style && props.style,
                             fontSize: props.size,
                             padding: props.gutter,
                             border: props.border,
                             display: props.block && 'block',
                             width: props.block && '100%',
                             marginBottom: props.marginBottom && props.marginBottom,
                             color: props.color && props.color,
                             // background: props.background && props.background
                         }}
                         className={`${classNames} ${props.active ? 'active' : ''}`}
                         onClick={props.onClick}>
                {props.children}
            </ButtonStyle>
        )
    }

    static defaultProps = {
        gutter: `1.1rem ${Gutter.md}`,
        size: FontSize.sm,
        border: '0',
        background: '#fff',
        color: '#000'
    }
}

export default Button;