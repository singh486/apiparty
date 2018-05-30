import React, { Component } from 'react'

import './Pixabay.css'

class Pixabay extends Component{
    constructor(props){
        super(props)

        this.state={
            image: {},
            hit: 0,
        }

        this.fetchUserData(props, this.state.hit)
    }

    componentWillReceiveProps = (newProps) =>{
        const locationChanged = newProps.location !== this.props.location
        if(locationChanged){
            this.fetchUserData(newProps, 0)
        }
    }

    fetchUserData = (props, num)=>{
        fetch(`https://pixabay.com/api/?key=9139160-c4c28de0fda4b134e635f8b41&q=${props.match.params.search}&image_type=photo`)
            .then(response => response.json())
            .then(data => {
                let info = {}
                if(data.totalHits > num){
                    info = {
                        url: data.hits[num].largeImageURL,
                        pixUrl: data.hits[num].pageURL,
                    }
                }
                this.setState({ image: info })
            })
    }
    render(){
        const {image} = this.state
        return(
            <div className="Image">
                <img id="result"
                    src= {image.url} 
                    alt="" 
                />
                <br></br>
                <a id="link" href={image.pixUrl} target="_blank">Link to Pixabay page</a>
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