import React from 'react';
import Button from "./button";
import {FontSize} from "../../../style/style";

class BuyButton extends React.Component {
    render() {
        const {width, background, color, fontSize, margin} = this.props;
        const {cta, price, currency} = this.props;
        const pricecurrency = price + currency;
        return (
            <button style={{
                backgroundColor: background,
                color: color,
                maxWidth: '100%',
                width: width,
                margin: margin,
                fontSize: fontSize,
                fontWeight: 'bold',
                border: 0
            }}>
                {cta} <span dangerouslySetInnerHTML={{__html: pricecurrency.replace('$$', '$')}}
                            className={'text-center mb-4'}/>
            </button>
        )
    }

    static defaultProps = {
        background: '#fffaf3',
        color: '#000',
        width: '100%',
        margin: '0 auto',
        cta: 'BUY NOW',
        price: 59,
        currency: '$',
        fontSize: FontSize.sm,
        cursor: 'pointer',
    }
}

export default BuyButton;