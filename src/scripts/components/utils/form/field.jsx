import React from 'react';
import styled from 'styled-components';
import {handleFieldChange} from "./helpers/handleFieldChange";
// import {FaSave} from 'react-icons/fa';
import {FontSize, Gutter} from "../../../style/variables";

class Field extends React.Component {
    render() {
        const {_this, type, label, name, value, index, innerIndex, change, focus, blur, height, fontSize, notValid, errorMessage, backgroundColor, splitField, placeholder, border, marginBottom, center, handleSave} = this.props;
        return (
            <FieldWrapper className='field field-text' height={height} marginBottom={marginBottom} fontSize={fontSize}
                          backgroundColor={backgroundColor}
                          style={{
                              ...fieldWrapper,
                              marginBottom: marginBottom,
                              height: height,
                              fontSize: fontSize,
                              // backgroundColor: backgroundColor,
                              textAlign: center ? 'center' : 'left'
                          }}
                          center={center}>
                {label && <label className='label' style={labelStyle}>{label}</label>}
                <div className={`control ${handleSave && 'd-flex align-items-center'}`}>

                    {/*{handleSave && <FaSave color={'#000'}*/}
                    {/*onClick={this.props.handleSave}*/}
                    {/*size={30}*/}
                    {/*style={{marginRight: Gutter.sm}}/>}*/}

                    <input className='input'
                           type={type}
                           name={name}
                           data-index={index && index}
                           data-inner-index={innerIndex && innerIndex}
                           value={value}
                           placeholder={placeholder}
                           onChange={change ? change : (e) => handleFieldChange(e, _this)}
                           onFocus={focus && focus}
                           onBlur={blur && blur}
                           style={{
                               ...inputStyle,
                               color: props => props.color,
                               height: props => props.height,
                               paddingLeft: Gutter.sm,
                               paddingTop: Gutter.xs,
                               backgroundColor: props => props.backgroundColor,
                               fontSize: props => props.fontSize
                           }}/>

                    {errorMessage && <p style={{visibility: notValid ? 'visible' : 'hidden', marginBottom: '0'}}>
                        {errorMessage ? errorMessage : 'שדה לא תקין'}
                    </p>}
                </div>
            </FieldWrapper>
        )
    }

    static defaultProps = {
        height: 'auto',
        rows: 3,
        value: '',
        color: '#000',
        placeholder: '',
        marginBottom: '0',
        backgroundColor: 'transparent',
        fontSize: FontSize.sm
    }
}

export default Field;

const fieldWrapper = {
    paddingBottom: '1rem',
    width: '100%'
};

const labelStyle = {
    fontSize: '1.5rem',
    padding: '0',
    color: '#fff'
};

const inputStyle = {
    width: '100%',
    paddingBottom: '.5rem',
    paddingTop: '.5rem',
    outline: '0',
    border: '0',
    lineHeight: '1.2rem'
};

const
    FieldWrapper = styled.div`
        margin-bottom: ${props => props.marginBottom}
        padding-bottom: 1rem;
        text-align: ${props => props.center ? 'center' : 'left'};  
        width: 100%;
        .label {
            font-size: 1.5rem;
            padding: 0;
            color: #fff;
        }
        .input {
            

            
        }
    `;