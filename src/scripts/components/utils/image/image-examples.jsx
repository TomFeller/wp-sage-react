import React from 'react';
import Image from "./image";
import BackgroundImage from './background-image';



/* Image */
/* rendereing an <img/>
*  * Available Props:
*  1. src
*       type: String
*       options: any valid image string
*       default: 'http://admin.youdoadventures.com/wp-content/uploads/2018/07/default-thumbnail.jpg'
*       require: YES
*       example: 'http://www.any_image_url'
*
*   2. width
*       type: String
*       options: any valid size value (with size type)
*       default: '100%'
*       require: No
*       examples: '100px', '20rem', '50%'
*
*   3. maxWidth
*       type: String
*       options: any valid size value (with size type)
*       default: '100%'
*       require: No
*       examples: '100px', '20rem', '50%'
* */


/* BackgroundImage */


class ImageExamples {
    render() {
        return (
            <div>
                {/* Minimum Requirements*/}
                <Image/>
                <BackgroundImage/>

                {/* With Props*/}
                <Text tag={'h1'}
                      color={'#fff'}
                      underline/>
            </div>
        )
    }
}

export default TextExamples;