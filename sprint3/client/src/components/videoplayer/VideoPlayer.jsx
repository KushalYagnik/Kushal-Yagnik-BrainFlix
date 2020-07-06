import React from 'react'

export default function VideoPlayer(props) {
    const { videos, image } = props.stats;
    return (
                <div className="hero">
                    {/* <video src={`${video}a4fdba93-0e3f-4eee-ad03-353825f499c9`} className="hero__video" controls poster={image}></video> */}
                    <video src={`${videos}`} className="hero__video" controls poster={image}></video>
                </div>
    )
}