import React from 'react';
import {HBox, VBox, Element} from 'react-stylesheet';
import styled from 'styled-components';

class Radio extends React.Component {
    render() {
        const {label, name, options, value, change, hideLabel, innerIndex, index, size} = this.props;
        // console.log(options);

        return (
            <FieldWrapper className='field field-radio'>
                <div className='control'>
                    <label className='label'>
                        {label}
                    </label>
                    <HBox alignItems={'center'}>
                        {options.map((option, i) => {
                            return (
                                <label key={i} style={radioLabel}>
                                    <input
                                        type={'radio'}
                                        name={name}
                                        onChange={change}
                                        value={value}
                                        checked={value}
                                        data-index={index ? index : i}
                                        data-inner-index={innerIndex && innerIndex}
                                        style={{
                                            ...radioInput,
                                            cursor: 'pointer',
                                            width: size ? size : 'initial',
                                            height: size ? size : 'initial',}}/>
                                    {hideLabel ? '' : option}
                                </label>
                            )
                        })}
                    </HBox>
                </div>
            </FieldWrapper>

        )
    }
}

export default Radio;


const FieldWrapper = styled.div`
        // margin-bottom: 1.5rem;
        .label {
            font-size: 1.5rem;
            padding: 0;
        }
        .input {
            width: 100%;
        }
    `;

const
    radioLabel = {
        marginLeft: '1rem',
        display: 'flex',
        alignItems: 'center',
    },
    radioInput = {
        margin: '0'
    };