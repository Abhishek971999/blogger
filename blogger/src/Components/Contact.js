import React, { Component } from 'react';
class Contact extends Component {
  render() {
    return (
      <div className='App contact-us-section'>
        <div className='row justify-content-center'>
          <div className='col-5'>
            <form class='form-section'>
              <div class='form-group'>
                <h4 for='exampleInputEmail1' class='contact-header-text'>
                  Enter your Email address
                </h4>
                <input
                  type='email'
                  class='form-control input-field'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
                <small id='emailHelp' class='form-text'>
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className='row justify-content-center'>
                <div className='col'>
                  <button class='btn btn-sm btn-info'>Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
