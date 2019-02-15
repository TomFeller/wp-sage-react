import React from 'react';
import {Container, PageTitle, PageContent, H1, H2, H3, H4, H5, H6} from "../../style/style";
import DataStore from "../../../flux/stores/DataStore";

class Text extends React.Component {
    render() {
        const {tag, color, underline} = this.props,
            fontSize = DataStore.getFontSizeByTag(tag);

        let Tag = H1;
        switch (this.props.tag) {
            case ('h1') :
                Tag = H1;
                break;
            case ('h2') :
                Tag = H2;
                break;
            case ('h3') :
                Tag = H3;
                break;
            case ('h4') :
                Tag = H4;
                break;
            case ('h5') :
                Tag = H5;
                break;
            case ('h6') :
                Tag = H6;
                break;
            case ('p') :
                Tag = P;
                break;
            case ('label') :
                Tag = Label;
                break;
            default:
                Tag : P
        }

        return (
            <Tag size={fontSize[`${tag}`]}
                 style={{
                     color: color,
                     textDecoration: underline ? 'underline' : 'none'
                 }}>
                {this.props.children}
            </Tag>
        )
    }

    static defaultProps = {
        tag: 'p',
        color: '#000'
    }
}

export default Text;