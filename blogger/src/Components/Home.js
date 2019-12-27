import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Typewriter from '../typewriter.png';
class Home extends Component {
  state = {
    post: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      this.setState({
        post: res.data.slice(0, 12)
      });
    });
  }
  render() {
    const { post } = this.state;
    const postList = post.length ? (
      post.map(post => {
        return (
          <div class='card-section' key={post.id}>
            <div class='card'>
              <img src={Typewriter} class='card-img-top' alt='lgoo' />
              <div class='card-body'>
                <h5 class='card-title'>
                  <Link to={'/' + post.id} className='card-link'>
                    {post.title}
                  </Link>
                </h5>
                <p class='card-text'>{post.body.slice(0, 50) + '...'}</p>
                <Link to={'/' + post.id} class='btn'>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <h1 class='display-4 text-center text-alt'>No Post Found</h1>
    );
    return (
      <div className='App'>
        <h1 class='display-4 text-center text-muted'>Latest post</h1>
        {postList}
      </div>
    );
  }
}

export default Home;
