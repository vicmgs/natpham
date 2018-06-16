import React from "react"

class DeletePost extends React.Component {
  constructor(props) {
    super(props)
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

  deletePost(id) {
    event.preventDefault()
    fetch('/api/posts/' + id, {
      method: 'DELETE',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => window.location.reload(true))
    .catch(error => console.error('Error:', error))
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <div key={post.title}>
            <h4 key={post.title}>
              Post: {post.title} -
              <button onClick={() => this.deletePost(post.id)}>
                Click to delete
              </button>
            </h4>
          </div>
        ))}
      </div>
    )
  }
}

export default DeletePost
