import { Provider } from "react-redux"
import { render } from "react-dom"
import React from "react"

import configureStore from "./store"
import Application from "./app"

const store = configureStore()

const App = (
  <Provider store={store}>
    <Application name="Yannick"/>
  </Provider>
)

render(<App/>, document.getElementById("app"))
