const HelloWorld = ({ name }) => <div>Hello {name}</div>

class Application extends React.Component {
  render() {
    const { name } = this.props

    return <HelloWorld name={name}/>
  }
}

ReactDOM.render(<Application name="Yannick"/>, document.getElementById("app"))
