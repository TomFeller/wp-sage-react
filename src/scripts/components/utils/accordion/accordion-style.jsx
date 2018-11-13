import styled from 'styled-components';

const AccordionWrapper = styled.div` 
    .accordion {
        &_section { 
            
        }
        
        &_header{
            padding: 1rem;
            background-color: ${props => props.colors.header.background};
            color: ${props => props.colors.header.color};
            &:hover {
                background-color: ${props => props.colors.headerHover.background};
                color: ${props => props.colors.headerHover.color};
            }
        }
        
        &_content {    
            padding: 1rem;
            display: none;
            background-color: ${props => props.colors.content.background};
            color: ${props => props.colors.content.color};
        }
        
        &_section.active {
            .accordion_content {
                display: block;
            }
            .accordion_header {
                background-color: ${props => props.colors.headerActive.background};
                color: ${props => props.colors.headerActive.color};
            }
        }
    }
   
`;

export {AccordionWrapper};