import React from 'react';
import styled from "styled-components";

class Select extends React.Component {
    render() {
        const {label, name, value, change, options, horizontal, height} = this.props;
        return (
            <SelectWrapper className='field' height={height}>
                <label className='label'>{label}</label>
                <div className='control'>
                    <div className='select'>
                        <select name={name}
                                value={value}
                                onChange={change}>

                            {options.map((option, i) => {
                                return (
                                    <option key={i}
                                            value={option}
                                            name={Object.keys(option)}
                                            data-id={Object.keys(option)}>
                                        {Object.values(option)}
                                    </option>
                                )
                            })}

                            {/*<option value='atom'>Atom</option>*/}
                        </select>
                    </div>
                </div>
            </SelectWrapper>

        )
    }

    static defaultProps = {
        height: '3rem',
        value: 'בחר'
    }
}

export default Select;


const
    SelectWrapper = styled.div`
        margin-bottom: 1.5rem;
        text-align: right;
        .label { 
            font-size: 1.5rem;
            padding: 0;
        }
        select {
            width: 100%;
            color: #000;
            height: ${props => props.height};
        }
    `;