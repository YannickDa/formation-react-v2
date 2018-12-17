const HelloWorld = () => React.createElement("div", null, "Hello World!")

class Application extends React.Component {
  render() {
    return React.createElement(HelloWorld)
  }
}

ReactDOM.render(React.createElement(Application, { name: "Yannick" }), document.getElementById("app"))
