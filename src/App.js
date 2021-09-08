import React, { Component } from 'react'
import axios from 'axios';

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        this.setState({ posts: response.data })
      })
      .catch(error => {
        console.log("data here..")
        console.log(error);

      })
  }
  render() {
    const { posts } = this.state;
    return (
      <div>
        {
          posts.length ?
            posts.map(data => <div key={data.id}>{data.title}</div>) : null
        }
      </div>
    )
  }
}
export default App