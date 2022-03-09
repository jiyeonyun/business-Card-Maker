import React, { useRef } from 'react';
import styles from './image_File_input.module.css';
const ImageFileInput = ({imageUploader,name,onFileChange}) => {
    const inputRef = useRef();
    const onButtonClick = (event)=>{
        event.preventDefault();
        inputRef.current.click();
    }
    const onChange = async event=>{
        console.log(event.target.files[0]);

        const uploaded = await imageUploader.upload(event.target.files[0]);
        console.log(uploaded);
        onFileChange({
            name: uploaded.originall_filename,
            url: uploaded.url,
        });
    }

    return(
        <div className={styles.container}>
            <input ref={inputRef} type='file' accept='image/*' name='file' onChange={onChange} className={styles.input}/>
            <button className={styles.button} onClick={onButtonClick}>{name || 'NO FILE'}</button>
        </div>
    );
};

export default ImageFileInput;