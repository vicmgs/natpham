import "phoenix_html"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import CreatePost from './components/CreatePost'
import DeletePost from './components/DeletePost'

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Nat Pham Sux...</h1>
        <Link to="/">Home</Link>
      </div>
    )
  }
}

class HelloReact extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/new" component={CreatePost}/>
          <Route path="/delete" component={DeletePost}/>
        </div>
      </Router>
    )
  }
}
ReactDOM.render(
  <HelloReact/>,
  document.getElementById("hello-react")
)
