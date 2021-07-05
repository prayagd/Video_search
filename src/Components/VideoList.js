import React from "react"
import VideoItem from "./VideoItem"

const VideoList = (props) => {

    const displayList = props.videos.map((val) => {
        return <VideoItem key = {val.id.videoId} video = {val} onVideoSelect = {props.onVideoSelect}/>
    })

    return(
        <div className = "ui relaxed divided list">
            {displayList}
        </div>
    )
}

export default VideoList