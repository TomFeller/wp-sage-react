import React from 'react';
import styled from 'styled-components';
import Button from "../../utils/button/button";
import {Gutter} from "../../digital-tools/style";

class Submit extends React.Component {
    render() {
        const {value, click, color} = this.props;
        return (
            <SubmitButton className='field field-submit'>
                <div className='control'>
                    <Button padding={Gutter.sm}
                            marginRight={'0'}
                            color={color}
                            outline
                            onClick={click}
                            block>
                        {value}
                    </Button>
                </div>
            </SubmitButton>
        )
    }

    static defaultProps = {
        color: 'primary',
        value: 'המשך',
        click: () => {
            console.log('clicked')
        }
    }
}

export default Submit;

const SubmitButton = styled.div`
    // .button {
    //     border-radius: 5px;
    //     color: #fff;
    //     border: 0;
    //     padding: 5px 10px;
    // }
    `;