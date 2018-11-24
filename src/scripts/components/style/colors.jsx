import React from 'react';

const white = '#f3f3f3', black = '#000';


const
    gray100 = '#f8f9fa',
    gray200 = '#e9ecef',
    gray300 = '#dee2e6',
    gray400 = '#ced4da',
    gray500 = '#adb5bd',
    gray600 = '#6c757d',
    gray700 = '#495057',
    gray800 = '#343a40',
    gray900 = '#212529';


const baseColors = {
    blue: '#007bff',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#c76394',
    red: '#dc3545',
    orange: '#fd7e14',
    yellow: '#ffc107',
    green: '#d6e9e9',
    teal: '#20c997',
    cyan: '#17a2b8',
    white: 'white',
    gray: gray100 ,
    grayMedium: gray400,
    grayDark: gray800
};



const Color = {
    primary: baseColors.green,
    secondary: baseColors.pink,
    success: baseColors.green,
    info: baseColors.cyan,
    warning: baseColors.yellow,
    danger: baseColors.red,
    light: baseColors.gray,
    dark: baseColors.grayDark,
    black: black,
    white: white
};

export {Color}