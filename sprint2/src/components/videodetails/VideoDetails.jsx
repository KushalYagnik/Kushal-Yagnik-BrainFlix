import React from 'react'


const Details = (props) => {
  const {
    title,
    channel,
    timestamp,
    views,
    likes,
    description
  } = props.stats;

  return (
    <div className="nowplaying__details">
      <div className="nowplaying__videodetails">
        <h1 className="nowplaying__title">{title}</h1>
        <div className="nowplaying__infowrapper">
          <div className="nowplaying__info">
            <h3 className="nowplaying__artist">{channel}</h3>
            <h4 className="nowplaying__date date">{realTime(timestamp)}</h4>
          </div>
          <div className="nowplaying__reviews">
            <img src="../assets/Icons/SVG/Icon-views.svg" alt="views-icon" />
            <h4 className="nowplaying__views">{views}</h4>
            <img src="../assets/Icons/SVG/Icon-likes.svg" alt="likes-icon" />
            <h4 className="nowplaying__likes">{likes}</h4>
          </div>
        </div>
      </div>
      <p className="nowplaying__summary">{description}</p>
    </div>
  );
};


export default function(props) {
  return (
    <div>
      <Details stats={props.stats} />
    </div>
  );
}

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