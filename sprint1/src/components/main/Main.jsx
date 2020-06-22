import React from 'react';
import axios from 'axios';
import './Main.scss';

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
          'items': []
        }
      }
      componentDidMount(){
        this.getItems();
      }
      getItems(){
        axios.get('./mainvideo.json')
          .then(res => {
            this.setState({'items': res.data})
          }
          )
      }
      render(){
        return(
            this.state.items.map(function(item,index){
              return (
                <div className="main">
                    <div className="hero">
                            <video src="" className="hero__video" poster="./assets/Images/video-list-0.jpg" controls></video>
                    </div>
                    <div className="content">
                        <div className="nowplaying">
                            <div className="nowplaying__details">
                                <div className="nowplaying__videodetails">
                                    <h1 className="nowplaying__title">{item.title}</h1>
                                    <div className="nowplaying__infowrapper">
                                        <div className="nowplaying__info">
                                            <h3 className="nowplaying__artist">{item.channel}</h3>
                                            <h4 className="nowplaying__date date">{item.timestamp}</h4>
                                        </div>
                                        <div className="nowplaying__reviews">
                                            <img src="./assets/Icons/SVG/Icon-views.svg" alt="views-icon"/>
                                            <h4 className="nowplaying__views">{item.views}</h4>
                                            <img src="./assets/Icons/SVG/Icon-likes.svg" alt="likes-icon"/>
                                            <h4 className="nowplaying__likes">{item.likes}</h4>
                                        </div>
                                    </div>
                                    
                                </div>
                                <p className="nowplaying__summary">{item.description}</p>
                            </div>
                            <div className="nowplaying__comments">
                                <h2 className="nowplaying__comments-header">3 Comments</h2>
                                <form className="nowplaying__form">
                                    <div className="nowplaying__form-img-wrapper">
                                        <img className="nowplaying__form-img" src="./assets/Images/Mohan-muruge.jpg" alt="comment-img"/>
                                    </div>
                                    <div className="nowplaying__form-inputs">
                                        <div className="nowplaying__form-comment-wrapper">
                                            <label htmlFor="nowplaying__form-comment" className="form__lbl lbl">Join the Conversation</label>
                                            <textarea className="nowplaying__form-comment" cols="30" rows="6" placeholder="Write comment here"></textarea>
                                        </div>
                                        <button className="nowplaying__form-submit btn">Comment</button>
                                    </div>
                                </form>
                                <div className="nowplaying__comments-list">
                                    {(item.comments).map((value, index) => {
                                        return (
                                            <div className="nowplaying__comments-unit">
                                                <div className="nowplaying__comments-imgwrapper">
                                                    <div className="nowplaying__comments-img"></div>
                                                </div>
                                                <div className="nowplaying__comments-info">
                                                    <div className="nowplaying__comments-post">
                                                        <h4 className="nowplaying__comments-name">{item.comments[index].name}</h4>
                                                        <h4 className="nowplaying__comments-date date">{item.comments[index].date}</h4>
                                                    </div>
                                                    <p className="nowplaying__comments-text">{item.comments[index].comment}</p>
                                                </div>
                                            </div>
                                        )
                                    })}                            
                                </div>
                            </div>
                        </div>
                        <div className="nextvideos">
                            <h2 className="nextvideos__lbl lbl">Next video</h2>
                            <Side/>
                        </div>
                    </div>
                </div>
              )
            })
        )
    }
}

class Side extends React.Component{
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

export default Main;