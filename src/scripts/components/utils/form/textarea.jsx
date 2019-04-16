import React from 'react';
import styled from 'styled-components';
import {handleFieldChange} from "./helpers/handleFieldChange";
import {FontSize, Gutter} from "../../../style/variables";

class TextArea extends React.Component {
    render() {
        const {_this, label, name, value, index, change, placeholder, backgroundColor, color, rows, height, fontSize} = this.props;
        return (
            <TextAreaWrapper className='field' height={height} fontSize={fontSize} backgroundColor={backgroundColor}
                             color={color} style={textAreaWrapper}>
                {label && <label className='label' style={labelStyle}>{label}</label>}
                <div className='control'>
                    <textarea className='textarea'
                              name={name}
                              value={value}
                              data-index={index && index}
                              placeholder={placeholder}
                              onChange={change ? change : (e) => handleFieldChange(e, _this)}
                              rows={rows}
                              style={{
                                  ...textareaStyle,
                                  color: props => props.color,
                                  fontSize: '1.8rem',
                                  height: props => props.height,
                                  backgroundColor: props => props.backgroundColor
                              }}
                    />
                </div>
            </TextAreaWrapper>
        )
    }

    static defaultProps = {
        height: 'auto',
        fontSize: FontSize.sm,
        rows: 3
    }
}

export default TextArea;

const textAreaWrapper = {
    marginBottom: '1.5rem',
    textAlign: 'left',
    width: '100%',
};

const labelStyle = {
    fontSize: '1.5rem',
    padding: '0',
    color: '#ffffff'
};

const textareaStyle = {
    width: '100%',
    border: '0',
    paddingBottom: '.5rem',
    paddingLeft: '1.5rem',
    fontSize: '1.8rem'
};

const
    TextAreaWrapper = styled.div`
        margin-bottom: 1.5rem;
        text-align: left;
        width: 100%;
        .label {
            font-size: 1.5rem;
            padding: 0;
            color: #fff;
            text-align: ${props => props.center ? 'center' : 'left'};
        }
        .textarea { 
            
            color: ${props => props.color};
            font-size: ${props => props.fontSize};
            height: ${props => props.height};
            background-color: ${props => props.backgroundColor};
            
            
           
        }
    `;