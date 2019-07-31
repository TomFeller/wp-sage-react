import React from 'react';
import {H1, H2, H3, H4, H5, H6, P, Label, Span} from "../../style/typography";

class Text extends React.Component {
    render() {
        const {tag, color, backgroundColor, underline, fontFamily, fontSize, mobileFontSize, pointer, textAlign, fontWeight, textShadow, className, style, index, onClick} = this.props;
        const {padding, paddingTop, paddingRight, paddingBottom, paddingLeft} = this.props;
        const {margin, marginTop, marginRight, marginBottom, marginLeft} = this.props;

        let Tag = H1;
        switch (tag) {
            case ('h1') :
                Tag = H1;
                break;
            case ('h2') :
                Tag = H2;
                break;
            case ('h3') :
                Tag = H3;
                break;
            case ('h4') :
                Tag = H4;
                break;
            case ('h5') :
                Tag = H5;
                break;
            case ('h6') :
                Tag = H6;
                break;
            case ('p') :
                Tag = P;
                break;
            case ('label') :
                Tag = Label;
                break;
            case ('span') :
                Tag = Span;
                break;
            default:
                Tag : P
        }

        return (
            <Tag className={className && className}
                 onClick={onClick && onClick}
                 mobileFontSize={mobileFontSize && mobileFontSize}
                 style={{
                     ...style && style,
                     color: color,
                     backgroundColor: backgroundColor && backgroundColor,
                     textDecoration: underline && 'underline',
                     fontFamily: fontFamily && fontFamily,
                     fontSize: fontSize && fontSize,
                     textAlign: textAlign && textAlign,
                     fontWeight: fontWeight && fontWeight,
                     padding: padding && padding,
                     paddingTop: paddingTop && paddingTop,
                     paddingBottom: paddingBottom && paddingBottom,
                     paddingLeft: paddingLeft && paddingLeft,
                     paddingRight: paddingRight && paddingRight,
                     margin: margin && margin,
                     marginTop: marginTop && marginTop,
                     marginBottom: marginBottom && marginBottom,
                     marginLeft: marginLeft && marginLeft,
                     marginRight: marginRight && marginRight,
                     textShadow: textShadow && textShadow,
                     cursor: pointer && 'pointer'
                 }}
                 data-index={index && index}
                 dangerouslySetInnerHTML={{__html: this.props.children}}/>
        )
    }

    static defaultProps = {
        tag: 'p',
        color: '#151515'
    }
}

export default Text;