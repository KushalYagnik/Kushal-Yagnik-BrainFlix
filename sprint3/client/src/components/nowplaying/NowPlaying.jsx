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
        axios.get(`http://localhost:8080/videos/`)
            .then(res => {
                this.setState({
                    nextvideos: res.data
                });
            })
            .catch(err => console.error(err));
        axios.get(`http://localhost:8080/videos/${this.state.nowplaying.id}`)
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
            axios.get(`http://localhost:8080/videos/${currentID}`)
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
