import React, { Component } from 'react'
import './App.css'
import Card from './component/Card'

export class App extends Component {


  typingCompanyName =()=>{
    this.setState({companyName: this.state.companyName})
  }
  render() {
    return (
      <div>
        <Card/>
      </div>
    )
  }
}

export default App

