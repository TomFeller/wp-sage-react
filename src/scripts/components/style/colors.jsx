import {Colors} from "./variables.jsx";

const ColorClasses = () => {
    return (
        `&-primary {
            background-color: ${Colors.primary};
            color: #000;
            &:hover { 
                background-color: ${Colors.hover.primary};
            }
            &:focus {
                background-color: ${Colors.focus.primary};
            }
            &.active {
                background-color: ${Colors.active.primary};
            }
        }
        
        &-secondary {
            background-color: ${Colors.secondary};
            color: #000;
            &:hover {
                background-color: ${Colors.hover.secondary};
            }
            &:focus {
                background-color: ${Colors.focus.secondary};
            }
            &.active {
                background-color: ${Colors.active.secondary};
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