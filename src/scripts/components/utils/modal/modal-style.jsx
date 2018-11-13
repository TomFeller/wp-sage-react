import styled from 'styled-components';
import {ColorClasses} from "../../style/colors";
import {
    FadeIn,
    FadeOut,
    ScaleIn,
    ScaleOut,
    SlideIn,
    SlideOut,
    SlideInY,
    SlideOutY,
    Spin,
    SpinBack
} from "../../style/animations";

const ModalWrapper = styled.div` 
    &.modal {
        position: fixed;
        width: 100%;
        height: 100%;        
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0,0,0,0.6); 
        ${SlideInY};
        &.fade {
            ${SlideOut};
        }
    }
`;

export {ModalWrapper}

