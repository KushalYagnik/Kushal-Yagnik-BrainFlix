import React, { Component } from 'react'

export class VideoComments extends Component {
    render() {
        return (
            <div className="nowplaying__comments">
                <h2 className="nowplaying__comments-header">3 Comments</h2>
                <form className="nowplaying__form" onSubmit={this.newComment}>
                    <div className="nowplaying__form-img-wrapper">
                        <img className="nowplaying__form-img" src="../assets/Images/Mohan-muruge.jpg" alt="comment-img" />
                    </div>
                    <div className="nowplaying__form-inputs">
                        <div className="nowplaying__form-comment-wrapper">
                            <label htmlFor="nowplaying__form-comment" className="form__lbl lbl">Join the Conversation</label>
                            <textarea className="nowplaying__form-comment userIn" cols="30" rows="6" placeholder="Write comment here"></textarea>
                        </div>
                        <button className="nowplaying__form-submit btn">Comment</button>
                    </div>
                </form>
                {this.props.comments.map(item => {
                    return (
                        <div key={item.id} className="nowplaying__comments-list">
                            <ShowComment comment={item} />
                        </div>
                    );
                })}
            </div>
        )
    }
}

const ShowComment = (props) => {
    const { comment, name, timestamp } = props.comment;
    return (
        <div className="nowplaying__comments-unit">
          <div className="nowplaying__comments-imgwrapper">
            <div className="nowplaying__comments-img"></div>
          </div>
          <div className="nowplaying__comments-info">
            <div className="nowplaying__comments-post">
              <h4 className="nowplaying__comments-name">{name}</h4>
              <h4 className="nowplaying__comments-date date">{realTime(timestamp)}</h4>
            </div>
            <p className="nowplaying__comments-text">{comment}</p>
          </div>
        </div>
    );
  };

function realTime(date) {
  let seconds = Math.floor((new Date() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

export default VideoComments
