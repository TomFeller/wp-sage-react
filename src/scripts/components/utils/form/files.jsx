import React from 'react';
import styled from 'styled-components';

import {HBox, VBox, Element} from 'react-stylesheet';
import {Container, Gutter, Viewport} from '../../style/style'
import File from "./file";
import Button from "../button/button";
import {FaPlus} from 'react-icons/fa';
import {RotateSpinner} from "react-spinners-kit";

class Files extends React.Component {
    constructor(props) {
        super(props);

        const images = typeof this.props.value === 'string' ? [this.props.value] : this.props.value;

        this.state = {
            filesUrls: images,
            loaderGif: 'https://admin.youdoadventures.com/wp-content/uploads/2018/06/loader.gif',
            placeholder: 'https://admin.youdoadventures.com/wp-content/uploads/2018/07/FileThumbnail.jpg'
        };

        this.removeImage = this.removeImage.bind(this);
        this.uploadFiles = this.uploadFiles.bind(this);
        this.previewFile = this.previewFile.bind(this);
        this.handleSingleFileChange = this.handleSingleFileChange.bind(this);
        this.fixFileName = this.fixFileName.bind(this);
    }

    componentDidMount() {
        const images = typeof this.props.value === 'string' ? [this.props.value] : this.props.value;

        this.setState({
            filesUrls: images,
            isLoading: false
        });
    }

    handleSingleFileChange(value, name, index) {
        const {filesUrls} = this.state;
        if (filesUrls) {
            this.state.filesUrls[index] = value;
        } else {
            this.state.filesUrls = [value]
        }


        this.setState({
            filesUrls: this.state.filesUrls
        });

        this.props.change(this.state.filesUrls, name, index);
    }

    fixFileName(fileName) {
        const extension = /(?:\.([^.]+))?$/.exec(fileName)[1];
        return `${fileName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.${extension}`;
    }

    uploadFiles(e) {
        this.setState({
            isLoading: true
        });
        this.props.loading();
        const input = e.target,
            length = input.files.length;

        const array = [];
        if (length <= 30) {
            for (let i = 0; i < input.files.length; i++) {
                let fileData = new FormData();
                fileData.append('file', input.files[i], this.fixFileName(input.files[i].name));
                if (this.props.getOriginalFile) {
                    this.props.getOriginalFile(fileData);
                }

                fetch('https://api.youdoadventures.com/upload_image', {
                    method: 'POST',
                    body: fileData
                }).then(
                    response => response.json()
                ).then(
                    success => this.previewFile(success, i === input.files.length - 1)
                );

            }
        } else {
            alert(' ניתן להעלות עד 30 תמונות בכל פעם.');
            this.setState({
                isLoading: false
            });
            return false;
        }
    }

    previewFile(file, last) {
        const root = 'api.youdoadventures.com',
            currentFilesUrls = this.state.filesUrls ? this.state.filesUrls : [],
            {name, index} = this.props;

        currentFilesUrls.push(`https://${root}/images/${file.files[0]}`);

        const urls = currentFilesUrls;

        this.setState({
            filesUrls: urls,
            isLoading: false
        });


        this.props.change(urls, this.props.name, index && index);
    }

    removeImage() {
        this.setState({
            fileUrl: '',
            hasFile: false
        })
    }

    render() {
        const {label, name, value, change, singleFile, width, removeImage, hidePreview, cta, style} = this.props,
            {isLoading, filesUrls, loaderGif, placeholder} = this.state;

        // console.log('value', filesUrls);

        // const filesUrls = isLoading ? loaderGif : fileUrl;


        const urls = filesUrls ? filesUrls : [placeholder],
            imageWidth = width ? width : '80px';

        return (
            <FieldWrapper className='field field-files' style={{...style ? style : ''}}>
                <label className='label'>{label}</label>
                <HBox flexWrap={'wrap'} height={'100%'}>
                    <Placeholder width={imageWidth} height={this.props.height}>
                        <input className={'input'}
                               type={'file'}
                               name={name}
                               onChange={this.uploadFiles}
                               multiple/>
                        {isLoading ? <RotateSpinner size={40}
                                                    color={'#337ab7'}
                                                    loading={true}/>
                            :
                            <FaPlus/>
                        }
                    </Placeholder>
                    {!hidePreview && urls.map((url, i) => {
                        return (
                            1 === 1 ?
                                <Placeholder key={i} width={imageWidth} height={this.props.height}>
                                    {/*<div onClick={this.removeImage}>X</div>*/}
                                    <File value={url}
                                        // width={imageWidth}
                                          name={name}
                                          change={this.handleSingleFileChange}
                                          index={i}/>
                                </Placeholder>
                                :
                                <Placeholder key={i} width={imageWidth} height={this.props.height}>
                                    <RotateSpinner size={40}
                                                   color={'#337ab7'}
                                                   loading={true}/>
                                </Placeholder>

                        )
                    })}
                </HBox>
            </FieldWrapper>
        )
    }

    static defaultProps = {
        loading: () => {
            console.log('Loading...')
        }
    }
}

export default Files;

const
    FieldWrapper = styled.div`
        margin-bottom: 1.5rem;
        // width: 200px;
        .label {
            font-size: 1.5rem;
            padding: 0;
        }
        .control {
            position: relative;
            // margin: 0 ${Gutter.xs}
        }
        .input {
            width: 100%;
            height: 100%;
            top: 0;
            z-index: 1;
            cursor: pointer;
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
        }
        .preview {
            position: relative
            display: flex;
            align-items: flex-start;
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

const Placeholder = styled.div`
    border: 2px dashed #999;
    border-radius: 2rem;
    padding: .5rem; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: ${Gutter.sm};
    width: ${props => props.width};
    height: ${props => props.height ? props.height : props.width};
    margin-bottom: ${Gutter.xs};
    overflow: hidden;
`;