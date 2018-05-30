import React, { Component } from 'react'

import './Pixabay.css'

class Pixabay extends Component{
    constructor(props){
        super(props)

        this.state={
            image: {}
        }

        this.fetchUserData(props)
    }

    componentWillReceiveProps = (newProps) =>{
        const locationChanged = newProps.location !== this.props.location
        if(locationChanged){
            this.fetchUserData(newProps)
        }
    }

    fetchUserData = (props)=>{
        fetch(`https://pixabay.com/api/?key=9139160-c4c28de0fda4b134e635f8b41&q=${props.match.params.search}&image_type=photo`)
            .then(response => response.json())
            .then(data => {
                let image = {}
                if(data.totalHits > 0){
                    image = {
                        url: data.hits[0].largeImageURL
                    }
                }

                this.setState({ image })
            })
    }
    render(){
        const {image} = this.state
        return(
            <div className="Image">
                <img id="result"src= {image.url} alt=""/>
                {/* <h2>{user.login}</h2>
                <h3>followers: {user.followers}</h3>
                <h3>following: {user.following}</h3>
                <h3>location: {user.location}</h3>
                <a href={user.html_url} target="_blank">Link to profile</a> */}
            </div>
        )
    }
}

export default Pixabay