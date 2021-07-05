import React from "react"

class SearchBar extends React.Component{

    state = {
        input: ""
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onFormSubmit(this.state.input)
        //user submitted some text
    }

    render(){
        return(
            <div className = "ui segment search-bar">
                <form className = "ui form" onSubmit = {this.onFormSubmit}>
                    <div className = "field">
                        <label>Youtube Video Search</label>
                        <input placeholder = "Search for a video" value = {this.state.input} onChange = {this.onInputChange}/>
                    </div> 
                </form>
            </div>
            
        )
    }
}

export default SearchBar