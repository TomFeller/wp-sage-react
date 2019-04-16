import React from 'react';
import {ModalWrapper} from './modal-style.jsx';
import {FontSize, Gutter} from "../../style/style";
import {FaDoorClosed} from 'react-icons/fa';


class Modal extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            fadeModal: false
        };

        this.hideModal = this.hideModal.bind(this);
    }

    hideModal() {
        this.setState({
            fadeModal: true
        });

        setTimeout(
            () => {
                this.props['closeModal'](this.props.id);

                this.setState({
                    fadeModal: false
                })
            },
            500
        );
    }

    render() {
        const {
                id,
                className,
                active,
                children
            } = this.props,
            {fadeModal} = this.state;

        let {props} = this,
            classNames = ['modal', className].join(className ? ' modal-' : '');

        return (
            <ModalWrapper {...props}
                          className={`
                                ${classNames}
                                ${fadeModal ? 'fade' : ''}
                          `}
                          id={`modal-${id}`}>
                <FaDoorClosed size={20} color={'#fff'} onClick={this.hideModal}/>
                {children}
            </ModalWrapper>
        )
    }

    static defaultProps = {
        gutter: Gutter.sm,
        size: FontSize.sm,
        border: '0'
    }
}

export default Modal;