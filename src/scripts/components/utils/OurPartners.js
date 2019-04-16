import React from 'react';
import styled from 'styled-components';
import {HBox, VBox, Element} from 'react-stylesheet';
import {Gutter} from "../../style/style";

class OurPartners extends React.Component {
    render() {
        return (
            <div className={'mb-5 mb-sm-0'}>
                <h3 style={{color: '#000', fontSize: '2rem', textAlign: 'center'}}>Our Partners</h3>
                <HBox justifyContent={'center'}>
                    <PartnerIcon style={{
                        width: '3rem',
                        height: '3rem',
                        padding: Gutter.sm,
                        // marginLeft: Gutter.sm,
                        borderRadius: '50%',
                        border: '1px solid #000',
                        color: '#000',
                        fontSize: '1.2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        I
                    </PartnerIcon>
                    <PartnerIcon style={{
                        width: '3rem',
                        height: '3rem',
                        padding: Gutter.sm,
                        marginLeft: Gutter.sm,
                        borderRadius: '50%',
                        border: '1px solid #000',
                        color: '#000',
                        fontSize: '1.2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        I
                    </PartnerIcon>
                    <PartnerIcon style={{
                        width: '3rem',
                        height: '3rem',
                        padding: Gutter.sm,
                        marginLeft: Gutter.sm,
                        borderRadius: '50%',
                        border: '1px solid #000',
                        color: '#000',
                        fontSize: '1.2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        I
                    </PartnerIcon>

                </HBox>
            </div>
        )
    }
}

export default OurPartners;

const PartnerIcon = styled.div`
    width: 3rem;
    height: 3rem;
    padding: ${Gutter.sm};
    margin-left: ${Gutter.sm};
    border-radius: 50%;
    border: 1px solid #000;
    color: #000;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;