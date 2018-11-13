import styled from 'styled-components';
import {Gutter} from "../../style/style";

const PanelWrapper = styled.article`
    .panel {
        &_image {
            width: 100%;
        }
        &_body {
            
        }
        &_header {
            padding: ${Gutter.sm}
        }
        &_content {
            padding: ${Gutter.sm}
        }
        &_footer {
            padding: ${Gutter.sm}
        }
    }
`;

const PanelBody = styled.div`
    padding: ${Gutter.sm}
`;
const PanelImage = styled.img`
 
`;

const PanelHeader = styled.header`
    padding-top: ${Gutter.xs};
    padding-bottom: ${Gutter.xs};
`;
const PanelContent = styled.section`
    padding-top: ${Gutter.xs};
    padding-bottom: ${Gutter.xs};
`;
const PanelFooter = styled.footer`
    padding-top: ${Gutter.xs};
    padding-bottom: ${Gutter.xs};
`;


export {PanelWrapper, PanelBody, PanelContent, PanelFooter, PanelHeader, PanelImage,};