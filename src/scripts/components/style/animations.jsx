import styled, {keyframes} from 'styled-components';

const getAnimationProps = ({...props}) => {
    const {speed, fillMode, timing, delay} = props;
    return (`
        animation-duration: ${speed ? speed : '.5s'};
        animation-timing: ${timing ? timing : 'ease-in-out'};
        animation-fill-mode: ${fillMode ? fillMode : 'forwards'};
        animation-delay: ${delay ? delay : '0s'};
    `)
};

const
    FadeIn = ({...props}) => {
        return (`
            transition: opacity .5s;
            opacity: 0;
            animation-name: ${fadeIn};
            ${getAnimationProps(...props)}
        `
        )
    },
    FadeOut = ({...props}) => {
        return (`
            transition: opacity .5s;
            opacity: 1;
            animation-name: ${fadeOut};
            ${getAnimationProps(...props)}
        `
        )
    };

const
    SlideIn = ({...props}) => {
        return (`
        transform: translateX(300px);
        animation-name: ${slideIn};
        ${getAnimationProps(...props)}
    `)
    },
    SlideOut = ({...props}) => {
        return (`
        transform: translateX(0);
        animation-name: ${slideOut};
        ${getAnimationProps(...props)}
    `)
    },
    SlideInY = ({...props}) => {
        return (`
        transform: translateY(-300px);
        animation-name: ${slideInY};
        ${getAnimationProps(...props)}
    `)
    },
    SlideOutY = ({...props}) => {
        return (`
        transform: translateY(0);
        animation-name: ${slideOutY};
        ${getAnimationProps(...props)}
    `)
    };

const
    ScaleIn = ({...props}) => {
        return (`
            transform: scale(0);    
            animation-name: ${scaleIn};
            ${getAnimationProps(...props)}
        `
        )
    },
    ScaleOut = ({...props}) => {
        return (`
            transform: scale(1);  
            animation-name: ${scaleOut};
            ${getAnimationProps(...props)}
        `
        )
    };

const
    Spin = ({...props}) => {
        return (`    
            animation-name: ${spin}; 
            ${getAnimationProps(...props)}
        `
        )
    },
    SpinBack = ({...props}) => {
        return (`    
            animation-name: ${spinBack}; 
            ${getAnimationProps(...props)}
        `
        )
    };


/* KeyFrames*/
const
    fadeIn = keyframes` 
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `,
    fadeOut = keyframes`
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    `,
    slideIn = keyframes`
        0% {
            opacity: 0;
            transform: translateX(300px});
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    `,
    slideOut = keyframes`
        0% {
            opacity: 1;
            transform: translateX(0);
        }
        100% {
            opacity: 0;
            transform: translateX(300px);
        }
    `,

    slideInY = keyframes`
        0% {
            opacity: 0;
            transform: translateY(-300px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    `,
    slideOutY = keyframes`
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-300px);
        }
    `,

    scaleIn = keyframes`
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    `,
    scaleOut = keyframes`
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    `,
    spin = keyframes`
        0% {
            transform: rotate(0deg); 
        }
        100% {
            transform: rotate(360deg);
        }
    `,
    spinBack = keyframes`
        0% {
            transform: rotate(360deg); 
        }
        100% {
            transform: rotate(0deg);
        }
    `;


export {FadeIn, FadeOut, ScaleIn, ScaleOut, SlideOut, SlideIn, SlideOutY, SlideInY, Spin, SpinBack};