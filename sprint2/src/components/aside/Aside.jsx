import React from 'react';
import axios from 'axios';
import './Aside.scss';

export default class Aside extends React.Component{
    constructor(){
        super();
        this.state = {
            'videos': []
        }
    }
    componentDidMount(){
        this.getVideos();
    }
    getVideos(){
        axios.get('./sidevideos.json')
            .then(res =>{
                this.setState({'videos': res.data})
            })
        // axios.get('https://project-2-api.herokuapp.com/videos/1aivjruutn6a?api_key=a4fdba93-0e3f-4eee-ad03-353825f499c9')
        //     .then(res => {
        //         this.setState({'videos':res.data})
        //         console.log(res.data)
        //     })
    }
    render(){
        return(
            this.state.videos.map(function(video,index){
                return(
                    <>                         
                        <div className="nextvideos__unit">
                            <div className="nextvideos__banner">
                                <img className="nextvideos__img" src={video.image} alt={index}/>
                            </div>
                            <div className="nextvideos__detail">
                                <div className="nextvideos__title">{video.title}</div>
                                <h4 className="nextvideos__channel">{video.channel}</h4>
                            </div>
                        </div>
                    </>
                )
            })
        )
    }
}