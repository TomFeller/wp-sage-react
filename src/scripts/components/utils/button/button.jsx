import React from 'react';
import {ButtonStyle} from './button-style.jsx';
import {FontSize, Gutter} from "../../style/style";



class Button extends React.Component {
    render() {
        let {props} = this,
            classNames = ['button', props.color].join(props.color ? ' button-' : '');

        classNames = [classNames, props.className].join(props.className ? ' button-' : '');

        return (
            <ButtonStyle {...props}
                         className={`${classNames} ${props.active ? 'active' : ''}`}
                         onClick={props.onClick}>
                {props.children}
            </ButtonStyle>
        )
    }

    static defaultProps = {
        gutter: `${Gutter.xs} ${Gutter.sm}`,
        size: FontSize.sm,
        border: '0'
    }
}

export default Button;