import React from "react"

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
    return (
      <div>
        {this.state.posts.map(post => (
          <div key={post.title}>
            <h1>{post.title}</h1>
            <img src={post.link} />
            <h4>{post.caption}</h4>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default Home
