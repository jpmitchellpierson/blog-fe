import React, { Component } from 'react';
// reduxForm is a function that helps connect this component
// to communicate with the formReducer we added in reducer index
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class NewPosts extends Component {
  renderField(field) {
    // pull meta prop off field and touched/error props off meta
    const { meta: { touched, error } } = field;
    // conditional styling for errors
    const className =  `form-group ${touched && error ? 'has-danger' : ''}`

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          // field.input is an object with props (onChange, etc.)
          // gives this input access to all those props
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // wait until post has been created
    // then navigate back to posts with newly created post appearing
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    // handleSubmit is a prop being passed to components from reduxForm
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Post Title"
          name="title"
          // don't add parens b/c Field will call function on its own
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: '', categories: '', content: '' }
  const errors = {};
  // Validate inputs from values
  if (!values.title) {
    errors.title = '* Enter a title!';
  }
  if (!values.categories) {
    errors.categories = '* Enter a category!';
  }
  if (!values.content) {
    errors.content = '* Enter some content!';
  }
  // If errors is returned empty, form will submit
  // Else if it has any properties, redux form assumes form is invalid
  return errors;
}

// layering reduxForm and connect helper functions
export default reduxForm({
  validate,
  form: 'NewPostsForm'
})(
  // result of connect function is put in as second set of parens for reduxForm helper
  // connect component to createPost action creator
  connect(null, { createPost })(NewPosts)
);