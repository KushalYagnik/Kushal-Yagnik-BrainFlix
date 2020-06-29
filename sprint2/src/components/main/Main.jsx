import React, { Component } from 'react';
import axios from 'axios';
import Aside from '../aside/Aside';
import './Main.scss';
import VideoComments from '../videocomments/VideoComments';
import VideoPlayer from '../videoplayer/VideoPlayer';
import VideoDetails from '../videodetails/VideoDetails';


export class Main extends Component {
    state = { nowplaying: { id: "", comments: [] }, nextvideos: [] };
    
    componentDidMount() {
        axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=a4fdba93-0e3f-4eee-ad03-353825f499c9`)
            .then(res => {
                this.setState({
                    nowplaying: res.data
                });
            })
            .catch(err => {
                console.error(err)
            });
        axios.get(`https://project-2-api.herokuapp.com/videos/?api_key=a4fdba93-0e3f-4eee-ad03-353825f499c9`)
            .then(res => {
                this.setState({
                    nextvideos: res.data
                });
            })
            .catch(err => {
                console.error(err)
            });
    }

    render() {
        return (
            <div>
                <VideoPlayer stats={this.state.nowplaying} />
                <div className="content">
                    <div className="nowplaying">
                        <VideoDetails stats={this.state.nowplaying} />
                        <VideoComments comments={this.state.nowplaying.comments} />
                    </div>
                    <Aside nextVid={this.state.nextvideos} currentVid={this.state.nowplaying.id}
                    />
                </div>
            </div>
            
        )
    }
}

export default Main