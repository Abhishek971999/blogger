import React, { Component } from 'react';
import axios from 'axios';
import Typewriter from '../typewriter.png';
import { Link } from 'react-router-dom';
class Post extends Component {
  state = {
    post: null
  };
  componentDidMount() {
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(res => {
      this.setState({
        post: res.data
      });
    });
  }
  render() {
    const post = this.state.post ? (
      <div class='container post-container'>
        <h1 class='display-4 text-center'>{this.state.post.title}</h1>
        <img class='post-img' src={Typewriter} alt='' />
        <p class='post-subtext'>{this.state.post.body}</p>
        <Link to='/' class='button'>
          Go back
        </Link>
      </div>
    ) : (
      <h1 class='display-4 text-center text-alt'>Loading Post...</h1>
    );
    return <div>{post}</div>;
  }
}

export default Post;
