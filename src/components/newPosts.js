import React, { Component } from 'react';
// reduxForm is a function that helps connect this component
// to communicate with the formReducer we added in reducer index
import { Field, reduxForm } from 'redux-form';

class NewPosts extends Component {
  render() {
    return (
      <form>
        <Field 
          name="title"
          component={}
        />
      </form>
    );
  };
};

export default reduxForm({
  form: 'NewPostsForm'
})(NewPosts);