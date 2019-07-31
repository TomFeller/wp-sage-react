import React from 'react';

class BuyButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showMessage: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.showMessage) {
            this.setState({
                showMessage: true
            })
        }

    }

    render() {
        const {width, padding, maxWidth, background, color, fontSize, margin} = this.props;
        const {cta, price, currency, hidePrice} = this.props;
        const pricecurrency = price + currency;
        const {showMessage} = this.state;
        return (<div style={{position: 'relative'}}>
                <button style={{
                    backgroundColor: background,
                    color: color,
                    maxWidth: maxWidth ? maxWidth : '100%',
                    width: width,
                    margin: margin,
                    fontSize: fontSize,
                    fontWeight: 'bold',
                    border: 0,

                    padding: padding,
                    cursor: 'pointer',
                    outline: '0 !important'
                }} className={'button'}
                        onClick={this.handleClick}>
                    {cta} {!hidePrice && <span dangerouslySetInnerHTML={{__html: pricecurrency.replace('$$', '$')}}
                                               className={'text-center mb-4'}/>}
                </button>
                {this.props.showMessage &&
                <span style={{width: '100%', left: 0, textAlign: 'center', fontSize: '1.3rem', top:'100%', display: 'block', opacity: showMessage ? 1 : 0}}>At this point we sell only throw b2b</span>}
                {this.props.showMessage &&
                <span style={{width: '100%', left: 0, textAlign: 'center', fontSize: '1.3rem', top:'100%', display: 'block', opacity: showMessage ? 1 : 0}}>
                    <a href={'/#contact-us'} style={{cursor:'pointer', fontWeight: 'bold', textDecoration: 'underline'}}>Contact us</a></span>}
            </div>
        )
    }

    static defaultProps = {
        background: '#fffaf3',
        color: '#000',
        width: '100%',
        margin: '0 auto',
        padding: '.5rem 0',
        cta: 'BUY NOW',
        price: 59,
        currency: '$',
        fontSize: '1.8rem',
        cursor: 'pointer',
    }
}

export default BuyButton;