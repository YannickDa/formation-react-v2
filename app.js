import React, { Component } from "react"
import { render } from "react-dom"

const HelloWorld = ({ name }) => <div>Hello {name}</div>

class Application extends Component {
  render() {
    const { name } = this.props

    return <HelloWorld name={name}/>
  }
}

render(<Application name="Yannick"/>, document.getElementById("app"))
