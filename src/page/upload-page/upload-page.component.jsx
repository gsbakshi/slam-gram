import React, {useState} from 'react';
import CustomButton from '../../components/custom-buttom/custom-button.component';
import FormInput from '../../components/form-input/form-input.component';

import './upload-page.styles.scss';

const username = 'xyz';

const UploadPage = () => {

    
    const username = 'aniak100'
    const name = 'Ania Kubow'
    const avatar = 'https://i.imgur.com/QwZod6m.png'
    const [caption, setCaption] = useState('');
    const [url, setUrl] = useState('');
    const today = new Date()
    const timestamp = today.toISOString()

    const handleSubmit = async event => {
        event.preventDefault();
        console.log('Handle Submit');
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
                                required
                            />
                            <FormInput
                                name='video'
                                label='video url'
                                handleChange={ (event) => setUrl(event.target.value) }
                                value={ url }
                                type='input'
                                required
                            />
                        </div>
                    </div>
                    <CustomButton alternate type='submit'>Upload</CustomButton>
                </form>
            </div>
        </div>
    );
};

export default UploadPage;