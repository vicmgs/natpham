import React from "react"
import Header from "./Header.jsx"

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentWillMount() {
    fetch('/api/posts')
    .then(res => res.json())
    .then(res => {
      this.setState({posts: res})
    })
    .catch(error => console.error('Error:', error))
  }

  render() {
    let posts = this.state.posts
    if (this.state.posts.length % 3 == 1) {
      posts.push({title: "empty1"})
      posts.push({title: "empty2"})
    } else if (this.state.posts.length % 3 == 2) {
      posts.push({title: "empty1"})
    }

    return (
      <div style={{textAlign: "center"}}>
        <Header />
        <div className="main">
          <div style={{paddingLeft: 20, paddingRight: 20}} className="post-container">
            {posts.map(post => (
              <div className="post" key={post.title}>
                {post.link && <img src={post.link} />}
                {post.link && <h3>{post.title}</h3>}
                {post.link && <h4>{post.caption}</h4>}
                {post.link && <p>{post.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
