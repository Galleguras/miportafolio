import React,{useEffect} from 'react'
import "./Cover.css"
import coverVideo from "../../media/coverVideo.mp4"
const Cover = () => {

    useEffect(() => {
     
        const vid =document.querySelector(".video");
        vid.playbackRate = 0.8;
      });

    return (
        <div className="coverContainer">
            <video className="video"  src={coverVideo} autoPlay loop muted></video>
            <h1>Pablo Gallego Carmona</h1>
            <p>Developer | Designer | Content Creator | Entrepeneur</p>
        </div>
    )
}

export default Cover
