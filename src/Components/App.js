import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../apis/youtube"
import VideoList from "./VideoList"
import VideoDetails from "./VideoDetails"

class App extends React.Component{

    state = {
        list: [],
        selectedVideo: null
    }

    componentDidMount(){
        this.onInputSumbit("closer")
    }

    onInputSumbit = async value => {
        const response = await youtube.get("/search", {
            params:{
                q: value
            }
        })

        this.setState({
            list: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }


    render(){
        return(
            <div className = "ui container">
                <SearchBar onFormSubmit = {this.onInputSumbit}/>
                <div className = "ui grid">
                    <div className = "ui row">
                        <div className = "eleven wide column">
                            <VideoDetails video = {this.state.selectedVideo}/>  
                        </div>
                        <div className = "five wide column">
                            <VideoList videos = {this.state.list} onVideoSelect = {this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default App