import React from 'react';
import {HBox, VBox, Element} from 'react-stylesheet';
import styled from 'styled-components';

import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaYoutube from 'react-icons/lib/fa/youtube';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import {Gutter} from "../../style/style";

class ShareIcons extends React.Component {
    render() {
        const {size, color} = this.props;
        return (
            <div>
                {/*<h3 style={{color: 'transparent', fontSize: '2rem', marginLeft: Gutter.sm}}>Share</h3>*/}
                <HBox justifyContent={'center'}>
                    <ShareIcon style={{ margin: `0 ${Gutter.xxs}`, cursor: 'pointer'}}>
                        <FaInstagram color={color ? color : '#fff'} size={size ? size : 20}/>
                    </ShareIcon>
                    <ShareIcon style={{ margin: `0 ${Gutter.xxs}`, cursor: 'pointer'}}>
                        <FaYoutube color={color ? color : '#fff'} size={size ? size : 20}/>
                    </ShareIcon>
                    <ShareIcon style={{ margin: `0 ${Gutter.xxs}`, cursor: 'pointer'}}>
                        <FaFacebook color={color ? color : '#fff'} size={size ? size : 20}/>
                    </ShareIcon>
                    <ShareIcon style={{ margin: `0 ${Gutter.xxs}`, cursor: 'pointer'}}>
                        <FaTwitter color={color ? color : '#fff'} size={size ? size : 20}/>
                    </ShareIcon>
                    <ShareIcon style={{ margin: `0 ${Gutter.xxs}`, cursor: 'pointer'}}>
                        <FaLinkedin color={color ? color : '#fff'} size={size ? size : 20}/>
                    </ShareIcon>
                </HBox>
            </div>
        )
    }
}

export default ShareIcons;


const ShareIcon = styled.div`
        margin: 0 ${Gutter.xxs};
        cursor: pointer;
    `;