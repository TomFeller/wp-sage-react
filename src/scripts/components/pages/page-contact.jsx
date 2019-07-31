import React from 'react';
import DataStore from '../../flux/stores/DataStore.js'
import {Page} from '../templates/page.jsx';
import {PageWrapper} from "../templates/page-wrapper.jsx";
import Text from '../utils/text/Text';
import Form from "../utils/form/form";
import {Container, Row, Col} from 'reactstrap';
import Field from "../utils/form/field";
import {handleFieldChange} from "../utils/form/helpers/handleFieldChange";
import TextArea from "../utils/form/textarea";
import {colors} from "../style/colors";

class PageContact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        const pageData = DataStore.getPageBySlug('contact');
        const title = pageData.title.rendered;

        const {name, email, message} = this.state;
        const colors = DataStore.getColors();
        const free_text = pageData.acf.free_location_text;

         return (
            <PageWrapper>
                <Container>

                    <Text tag={'h2'}
                          color={colors.primary}
                          underline={true}>
                        {title}
                    </Text>

                    <Form width={'500px'}>
                        <Row>
                            <Col sm={6}>
                                <Field label={'Name'}
                                       placeholder={'Your name'}
                                       name={'name'}
                                       value={name}
                                       _this={this}/>
                            </Col>
                            <Col sm={6}>
                                <Field label={'Email'}
                                       placeholder={'Your email'}
                                       name={'email'}
                                       value={email}
                                       _this={this}/>
                            </Col>
                            <Col sm={12}>
                                <TextArea label={'Message'}
                                          placeholder={'Your Message'}
                                          name={'message'}
                                          value={message}
                                          _this={this}/>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </PageWrapper>
        );
    }
}

export default PageContact;