import React from 'react';
import Image from "./image";
import BackgroundImage from './background-image';

/* Image */
/* rendering an <img/>
*  Available Props:
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
/* rendering a <div/> with background-image
*  Available Props:
*  1. url:
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
*   3. height
*       type: String
*       options: any valid size value (with size type)
*       default: '30rem'
*       require: No
*       examples: '100px', '20rem', '50%'
*
*   4. position
*       type: String
*       options: any 'background-position' valid value
*       default: center center
*       required: No
*       examples: 'top center'
*
*   5. size
*       type: String
*       options: any 'background-size' valid value
*       default: cover
*       required: No
*       examples: 'contain'
*
*   5. repeat
*       type: String
*       options: any 'background-repeat' valid value
*       default: no-repeat
*       required: No
*       examples: 'repeat'
 */


class ImageExamples {
    render() {
        return (
            <div>
                {/* Minimum Requirements*/}
                <Image src={'http://the_source_url.png'}/>
                <BackgroundImage url={'http://the_source_url.png'}/>


                {/* With Props */}
                <Image src={'http://the_source_url.png'}
                       width={'50%'}
                       maxWidth={'400px'}/>

                <BackgroundImage url={'http://the_source_url.png'}
                                 width={'200px'}
                                 height={'100px'}
                                 position={'center'}
                                 size={'90%'}
                                 repeart={'repeat'}/>

            </div>
        )
    }
}

export default ImageExamples;