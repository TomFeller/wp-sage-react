import React from 'react';
import styled from 'styled-components';
import {HBox, VBox, Element} from 'react-stylesheet';
import {RotateSpinner} from "react-spinners-kit";
import Button from "../button/button";
import {Gutter} from "../../style/style";

class File extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fileUrl: this.props.value,
            loaderGif: 'https://admin.youdoadventures.com/wp-content/uploads/2018/06/loader.gif',
            placeholder: this.props.placeholder ? this.props.placeholder : 'https://admin.youdoadventures.com/wp-content/uploads/2018/07/FileThumbnail.jpg'
        };

        this.removeImage = this.removeImage.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.previewFile = this.previewFile.bind(this);
        this.fixFileName = this.fixFileName.bind(this);
    }

    componentDidMount() {
        this.setState({
            hasFile: this.state.fileUrl !== ''
        })
    }

    fixFileName(fileName) {
        const extension =  /(?:\.([^.]+))?$/.exec(fileName)[1];
        return `${fileName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${extension}`;
    }

    uploadFile(e) {
        this.setState({
            isLoading: true
        });

        let input = e.target,
            fileData = new FormData(),
            validFileName = this.fixFileName(input.files[0]['name']);

        fileData.set('file', input.files[0], validFileName);
        fetch('https://api.youdoadventures.com/upload_image', {
            method: 'POST',
            body: fileData
        }).then(
            response => response.json()
        ).then(
            success => this.previewFile(e, success)
        );
    }

    previewFile(e, data) {
        const root = 'api.youdoadventures.com',
            fileName = data.files[0],
            url = `https://${root}/images/${fileName}`,
            {name, index} = this.props;

        this.setState({
            fileUrl: url, // ********* Attention *********
            isLoading: false
        });

        this.props.change(url, name, index && index, e);
    }

    removeImage() {
        this.setState({
            fileUrl: '',
            hasFile: false
        })
    }

    render() {
        const {label, name, value, width, height, index, cta, hidePreview, valueHack, marginBottom, center, buttonBackground, videoField} = this.props,
            {isLoading, loaderGif, placeholder, fileUrl} = this.state;

        const url = fileUrl ? fileUrl : placeholder,
            imageWidth = width ? width : '100px';

        return (
            <FieldWrapper className='field field-file'
                          style={{width: width ? width : 'auto', height: height ? height : 'auto', cursor: 'pointer', textAlign: center ? 'center' : 'inherit'}}>
                <label className='label'
                       style={{width: center ? '100%' : 'auto'}}>
                    {label}
                    </label>
                <div className='control' style={{cursor: 'pointer', height: '100%', textAlign: center ? 'center' : 'inherit'}}>

                    {/*{!hidePreview &&*/}
                    {/*<div className={'preview'}>*/}
                    {/*/!*<FaTrash size={18} onClick={this.removeImage}/>*!/*/}
                    {/*{isLoading ?*/}
                    {/*<HBox justifyContent={'center'}>*/}
                    {/*<RotateSpinner*/}
                    {/*size={40}*/}
                    {/*color={'#337ab7'}*/}
                    {/*loading={true}*/}
                    {/*style={{margin: 'auto'}}/>*/}
                    {/*</HBox>*/}
                    {/*:*/}
                    {/*<img src={valueHack ? value : url}*/}
                    {/*width={imageWidth}*/}
                    {/*style={{cursor: 'pointer', maxWidth: '100%'}}/>*/}
                    {/*}*/}
                    {/*</div>*/}
                    {/*}*/}

                    {videoField ?
                        <Button background={buttonBackground}
                                position={'relative'}
                                padding={`${Gutter.xs} ${Gutter.sm}`}
                                weight={'bold'}>
                            <input className={'input'}
                                   type={'file'}
                                   data-index={index && index}
                                   name={name}
                                   style={{
                                       cursor: 'pointer',
                                       position: 'absolute',
                                       height: '100%',
                                       width: '100%',
                                       opacity: 0,
                                       right: '0'
                                   }}
                                   onChange={this.uploadFile}/>
                            {cta}

                        </Button>
                        :
                        <div className='control' style={{cursor: 'pointer', height: '100%'}}>

                            {!hidePreview &&
                            <div className={'preview'}>
                                {/*<FaTrash size={18} onClick={this.removeImage}/>*/}
                                {isLoading ?
                                    <HBox justifyContent={'center'}>
                                        <RotateSpinner
                                            size={40}
                                            color={'#337ab7'}
                                            loading={true}
                                            style={{margin: 'auto'}}/>
                                    </HBox>
                                    :
                                    <img src={valueHack ? value : url}
                                         width={imageWidth}
                                         style={{cursor: 'pointer', maxWidth: '100%'}}/>
                                }
                            </div>
                            }

                            <input className={'input'}
                                   type={'file'}
                                   data-index={index && index}
                                   name={name}
                                   style={{cursor: 'pointer', height: '100%'}}
                                   onChange={this.uploadFile}/>
                        </div>
                    }
                </div>
            </FieldWrapper>
        )
    }
    static defaultProps = {
        buttonBackground: '#999',
        cta: 'העלה קובץ'
    }
}

export default File;

const
    FieldWrapper = styled.div`
   cursor: pointer;
        margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};  
        // width: 200px;
        .label {
            font-size: 1.5rem;
            padding: 0;
        }
        .control {
            position: relative;
            cursor: pointer;
        }
        .input {
            width: 100%;
            height: 100%;
            top: 0;
            z-index: 1; 
            cursor: pointer;
        }
        .preview {
            position: relative;
            text-align: center;
            & + input {
                position: absolute;
                opacity: 0;
            }
            // svg {
            //     position: absolute;
            //     top: 1rem;
            //     right: 1rem;
            //     z-index: 2;
            //     cursor: pointer;
            //    
            // }
        }
    `;