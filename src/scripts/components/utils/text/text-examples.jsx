import React from 'react';
import Text from "./text";

/*
* Available Props:
* 1. tag
*       type: String
*       options: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label'
*       default: 'p'
*       require: no
*
* 2. color
*       type: String
*       options: any valid color string
*       default: '#000'
*       require: no
*
* 3. underline
*       type: Boolean
*       options: true/false
*       default: false
*       require: no
*
*/

class TextExamples {
    render() {
        return (
            <div>
                {/* Minimum Requirements*/}
                <Text/>

                {/* With Props*/}
                <Text tag={'h1'}
                      color={'#fff'}
                      underline/>
            </div>
        )
    }
}

export default TextExamples;