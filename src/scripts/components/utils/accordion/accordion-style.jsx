import styled from 'styled-components';

const AccordionWrapper = styled.div` 
    .accordion {
        &_section { 
            
        }
        
        &_header{
            cursor: pointer
        }
        
        &_content {    
            
            display: none;
        }
        
        &_section.active {
            .accordion_content {
                display: block;
            }
            .accordion_header {
                
            }
        }
    }
   
`;

export {AccordionWrapper};