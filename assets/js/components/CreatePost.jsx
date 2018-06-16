import React from "react"

class CreatePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      caption: '',
      link: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    fetch('/api/posts/new', {
      method: 'POST',
      body: JSON.stringify(this.state),
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Title: <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Caption: <input type="text" name="caption" value={this.state.caption} onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Description: <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
          </label>
          <br/>
          <label>
            Link: <input type="text" name="link" value={this.state.link} onChange={this.handleChange}/>
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default CreatePost
