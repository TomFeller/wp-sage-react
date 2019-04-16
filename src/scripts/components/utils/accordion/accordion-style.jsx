import styled from 'styled-components';

const AccordionWrapper = styled.div` 
    .accordion {
        &_section { 
            
        }
        
        &_header{
            padding: 1rem;
            border: 1px solid;
        }
        
        &_content {    
            padding: 1rem;
            display: none;
            border: 1px solid;
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