import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Aside.scss';

export class Aside extends Component {
    state = {
        nextvideoslist: []
    };

    render() {
        return (
            <div className="nextvideos">
                <h2 className="nextvideos__lbl lbl">Next video</h2>
                {this.props.nextVid.map(nextVids => {                 
                    if (nextVids.id !== this.props.currentVid) {
                        return (
                            <Link className="nextvideos__links" to={`/video/${nextVids.id}`}>
                                <div key={nextVids.id} className="nextvideos__unit">
                                    <ChangedVideo information={nextVids} />
                                </div>
                            </Link>
                        );
                    }
                })}
            </div>
        );
    }
}

const ChangedVideo = props => {
    const { title, channel, image } = props.information;
    return (
        <div className="nextvideos__unit">
            <div className="nextvideos__banner">
                <img className="nextvideos__img" src={image} alt="" />
            </div>
            <div className="nextvideos__detail">
                <div className="nextvideos__title">{title}</div>
                <h4 className="nextvideos__channel">{channel}</h4>
            </div>
        </div>
    );
};

export default Aside