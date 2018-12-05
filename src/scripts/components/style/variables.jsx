import DataActions from "../../flux/actions/DataActions";

const Viewport = {
        xs: '320px',
        xs_l: '480px',
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1080px',
        wide: '1200px',
        widest: '1920px'
    },
    Gutter = {
        xxs: '.5rem',
        xs: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '3.5rem',
        xl: '4.5rem'
    },
    FontFamily = {
        title: "'Roboto', sans-serif",
        content: "'Rubik', sans-serif"
    },
    FontSize = {
        tiny: '.1rem',
        xxs: '1.3rem',
        xs: '1.5rem',
        sm: '1.8rem',
        md: '2.4rem',
        lg: '4rem',
        xl: '6rem',
        jumbo: '9rem'
    },
    Colors = {
        primary: '#5f55d5',
        secondary: '#edcb36',
        success: '#f2ab41',
        danger: '#6af2d4',
        action: '#3341ad',
        error: '#ff0000',
        hover: {
            main: '#5f55d5',
            sub: '#edcb36',
            success: '#f2ab41',
            danger: '#6af2d4',
            action: '#3341ad',
            error: '#ff0000',
        },
        focus: {
            main: '#5f55d5',
            sub: '#edcb36',
            success: '#f2ab41',
            danger: '#6af2d4',
            action: '#3341ad',
            error: '#ff0000',
        },
        active: {
            main: '#5f55d5',
            sub: '#edcb36',
            success: '#f2ab41',
            danger: '#6af2d4',
            action: '#3341ad',
            error: '#ff0000',
        }
    },
    Zindex = {
        xs: '10',
        sm: '20',
        md: '30',
        lg: '40',
        xl: '50',
        modal: '100',
    };


const header_height = '8rem';

export {Viewport, Gutter, FontSize, Colors, Zindex, FontFamily, header_height};