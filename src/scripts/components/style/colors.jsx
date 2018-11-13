import {Colors} from "./variables.jsx";

const ColorClasses = () => {
    return (
        `&-main {
            background-color: ${Colors.main};
            color: #000;
            &:hover { 
                background-color: ${Colors.hover.main};
            }
            &:focus {
                background-color: ${Colors.focus.main};
            }
            &.active {
                background-color: ${Colors.active.main};
            }
        }
        
        &-sub {
            background-color: ${Colors.sub};
            color: #000;
            &:hover {
                background-color: ${Colors.hover.sub};
            }
            &:focus {
                background-color: ${Colors.focus.sub};
            }
            &.active {
                background-color: ${Colors.active.sub};
            }
        }
        
        &-success {
            background-color: ${Colors.success};
            color: #000;
            &:hover {
                background-color: ${Colors.hover.success};
            }
            &:focus {
                background-color: ${Colors.focus.success};
            }
            &.active {
                background-color: ${Colors.active.success};
            }
        }
        
        &-danger {
            background-color: ${Colors.danger};
            color: #000;
            &:hover {
                background-color: ${Colors.hover.danger};
            }
            &:focus {
                background-color: ${Colors.focus.danger};
            }
            &.active {
                background-color: ${Colors.active.danger};
            }
        }
        
        &-action {
            background-color: ${Colors.action};
            color: #000;
            &:hover {
                background-color: ${Colors.hover.action};
            }
            &:focus {
                background-color: ${Colors.focus.action};
            }
            &.active {
                background-color: ${Colors.active.action};
            }
        }
        
        &-error {
            background-color: ${Colors.error}; 
            color: #000;
            &:hover {
                background-color: ${Colors.hover.error}; 
            }
            &:focus {
                background-color: ${Colors.focus.error};
            }
            &.active {
                background-color: ${Colors.active.error};
            }
        }
    `
    )
};

export {ColorClasses};