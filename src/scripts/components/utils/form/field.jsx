import React from 'react';
import styled from 'styled-components';
import {FontSize, Gutter} from "../../style/style";
import {handleFieldChange} from "./helpers/handleFieldChange";

class Field extends React.Component {
    render() {
        const {_this, type, label, name, value, index, innerIndex, change, focus, blur, height, fontSize, notValid, errorMessage, splitField, placeholder, background, border, marginBottom, center} = this.props;
        return (
            <FieldWrapper className='field field-text' height={height} marginBottom={marginBottom} fontSize={fontSize} center={center}>
                <label className='label'>{label}</label>
                <div className='control'>
                    <input
                        className='input'
                        type={type}
                        name={name}
                        data-index={index && index}
                        data-inner-index={innerIndex && innerIndex}
                        value={value}
                        placeholder={placeholder}
                        onChange={change ? change : (e) => handleFieldChange(e, _this)}
                        onFocus={focus && focus}
                        onBlur={blur && blur}
                    style={{backgroundColor: background ? background : '#fff', border: border && border}}/>

                    {errorMessage && <p style={{visibility: notValid ? 'visible' : 'hidden', marginBottom: '0'}}>
                        {errorMessage ? errorMessage : 'שדה לא תקין'}
                        </p>}
                </div>
            </FieldWrapper>
        )
    }
    static defaultProps = {
        height: '4.5rem',
        rows: 3,
        value: '',
        placeholder:'',
        marginBottom: '1rem'
    }
}

export default Field;

const
    FieldWrapper = styled.div`
        margin-bottom: ${props => props.marginBottom}
        text-align: ${props => props.center ? 'center' : 'left'};  
        width: 100%;
        .label {
            font-size: 1.5rem;
            padding: 0;
            color: #000;
        }
        .input {
            width: 100%;
            color: #000;
            height: ${props => props.height};
            padding-right: ${Gutter.xs};
            font-size: ${props => props.fontSize ? props.fontSize : FontSize.sm};
        }
    `;