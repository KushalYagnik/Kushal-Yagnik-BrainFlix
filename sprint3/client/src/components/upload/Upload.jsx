import React, { Component } from 'react'
import './Upload.scss';
import axios from 'axios';

export class Upload extends Component {
    uploadVid = (event) => {
        event.preventDefault();
        axios.post(`http://localhost:8080/videos`,{
            title: event.target.title.value,
            description: event.target.description.value,
        })
        event.target.title.value = '';
        event.target.description.value = '';
    };
    render() {
        return (
            <form className="upload" onSubmit={this.uploadVid}>
                <h1 className="upload__heading">Upload Video</h1>
                <div className="upload__body">
                    <div className="upload__poster">
                        <label htmlFor="upload__thumbnail" className="upload__thumb-lbl lbl">Video thumbnail</label>
                        <img src="./assets/Images/Upload-video-preview.jpg" alt="" className="upload__thumbnail" />
                    </div>
                    <div className="upload__form">
                        <label htmlFor="upload__title" className="upload__title-lbl lbl">Title your video</label>
                        <input type="text" className="upload__title userIn" id="title" placeholder="Add a title to your video" />
                        <label htmlFor="upload__description" className="upload__description-lbl lbl">Add a video description</label>
                        <textarea name="upload__description" cols="30" rows="10" className="upload__description userIn" id="description" placeholder="Add a description of your video" />
                    </div>
                </div>
                <div className="upload__inputs">
                    <button className="upload__publish btn">Publish</button>
                    <button className="upload__cancel btn">Cancel</button>
                </div>
            </form>
        )
    }
}

export default Upload
