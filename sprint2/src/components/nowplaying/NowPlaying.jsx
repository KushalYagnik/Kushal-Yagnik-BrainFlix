import React, { Component } from 'react';
import VideoComments from '../videocomments/VideoComments';
import VideoPlayer from '../videoplayer/VideoPlayer';
import VideoDetails from '../videodetails/VideoDetails';
import Aside from '../aside/Aside';
import axios from "axios";
import './NowPlaying.scss';

export class NowPlaying extends Component {
    state = {
        nowplaying: {
            id: this.props.match.params.id,
            comments: []
        },
        nextvideos: []
    };
    componentDidMount() {
        axios.get(`https://project-2-api.herokuapp.com/videos/?api_key=a4fdba93-0e3f-4eee-ad03-353825f499c9`)
            .then(res => {
                this.setState({
                    nextvideos: res.data
                });
            })
            .catch(err => console.error(err));
        axios.get(`https://project-2-api.herokuapp.com/videos/${this.state.nowplaying.id}?api_key=a4fdba93-0e3f-4eee-ad03-353825f499c9`)
            .then(res => {
                this.setState({
                    nowplaying: res.data
                });
            })
            .catch(err => console.error(err));
    }

    componentDidUpdate(_prevProps, prevState) {
        let currentID = this.props.match.params.id;
        if (prevState.nowplaying.id !== currentID) {
            axios.get(`https://project-2-api.herokuapp.com/videos/${currentID}?api_key=a4fdba93-0e3f-4eee-ad03-353825f499c9`)
                .then(res => {
                    this.setState({
                        nowplaying: res.data
                    });
                });
        }
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
                    <Aside
                        nextVid={this.state.nextvideos}
                        currentVid={this.state.nowplaying.id}
                    />
                </div>
            </div>
        )
    }
}

export default NowPlaying
