import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import faker from 'faker';

import './upload-page.styles.scss';

import CustomButton from '../../components/custom-buttom/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';

const uploadHeadingStyle = 'color: #49CC90; font-weight: bold; font-size: 25px';
const responseStyle = 'font-weight: bold';

const UploadPage = () => {
    
    const username = 'aniak100'
    const name = 'Ania Kubow'
    const avatar = 'https://i.imgur.com/QwZod6m.png'
    const today = new Date()
    const timestamp = today.toISOString()
    
    const [caption, setCaption] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    
    let id = faker.datatype.uuid();

    let history = useHistory();

    const handleSubmit = async event => {
        event.preventDefault();
        
        const data = {
            id: id,
            name: name,
            username: username,
            avatar: avatar,
            is_followed: false,
            video: videoUrl,
            caption: caption,
            likes: 0,
            comments: 0,
            timestamp: timestamp,
            button_visible: false
        }

        try {
            //                                                                                          *
            console.log('%cUpload Tik Tok Post', uploadHeadingStyle);
            console.log('%cPATH /.netlify/functions/upload using AXIOS POST', responseStyle);
            console.log("%cWith the following BODY = ", responseStyle);
            console.log("%c\t%s", responseStyle, JSON.stringify(data));
            //                                                                                          *
            
            let response = await axios.post('/.netlify/functions/upload', data);
            
            //                                                                                          *
            console.log('%cResponse from Upload', responseStyle);
            console.log(response);
            //                                                                                          *

            // return response;
            history.push('/');

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='upload-page-container'>
            <div className="page-header">
                <h1>Upload video</h1>
                <p>This video will be published to @{ username }</p>
                <form onSubmit={ handleSubmit }>
                    <div className='form-container'>
                        <div className="image-upload"></div>
                        <div className="form-section">
                            <FormInput
                                name='caption'
                                label='caption'
                                handleChange={ (event) => setCaption(event.target.value) }
                                value={ caption }
                                type='input'
                            />
                            <FormInput
                                name='video'
                                label='video url'
                                handleChange={ (event) => setVideoUrl(event.target.value) }
                                value={ videoUrl }
                                type='input'
                            />
                        </div>
                        <span className='note'>
                            To simulate video upload, you can add a video url in the input from&nbsp;
                            <a href="https://imgur.com/" target="_blank" rel="noopener noreferrer">imgur</a>
                        </span>
                    </div>
                    <CustomButton alternate type='submit'>Upload</CustomButton>
                </form>
            </div>
        </div>
    );
};

export default UploadPage;