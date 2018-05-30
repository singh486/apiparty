import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Homework.css'
import Pixabay from './Pixabay.js'

class Github extends Component {
    state={
        search: '',
    }

    handleChange = (ev) =>{
        this.setState({search: ev.target.value})
    }

    handleSubmit = (ev) =>{
        ev.preventDefault()
        this.props.history.push(`/homework/${this.state.search}`)

        this.setState({search: ''})
    }
  render() {
    return (
      <div className="Images">
        <img
          src="https://i0.wp.com/www.girtmobile.com/content/uploads/2017/03/Pixabay-Logo.png"
          alt="Pixabay"
          className="logo"
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <input 
                id="input"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
            />
          </div>
          <div>
            <button id="button" type="submit">Look up image</button>
          </div>
        </form>
        <Route path="/homework/:search" component={Pixabay}/>
        <Route exact path="/homework" render={()=><h3>Enter a image to search Pixabay</h3>}/>
      </div>
    )
  }
}

export default Github