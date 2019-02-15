import React from 'react';
import styled from 'styled-components';
import {handleFieldChange} from "./helpers/handleFieldChange";

class TextArea extends React.Component {
    render() {
        const {_this, label, name, value, index, change, placeholder, rows, height} = this.props;
        return (
            <TextAreaWrapper className='field' height={height}>
                <label className='label'>{label}</label>
                <div className='control'>
                    <textarea className='textarea'
                              name={name}
                              value={value}
                              data-index={index && index}
                              placeholder={placeholder}
                              onChange={change ? change : (e) => handleFieldChange(e, _this)}
                              rows={rows}
                    />
                </div>
            </TextAreaWrapper>
        )
    }
    static defaultProps = {
        height: 'auto',
        rows: 3
    }
}

export default TextArea;

const
    TextAreaWrapper = styled.div`
        margin-bottom: 1.5rem;
        text-align: right;
        width: 100%;
        .label {
            font-size: 1.5rem;
            padding: 0;
        }
        .textarea { 
            width: 100%;
            color: #000;
            height: ${props => props.height};
        }
    `;