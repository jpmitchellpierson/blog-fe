import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class ShowPosts extends Component {
  componentDidMount() {
    // fetch the post with the given id off params object
    // match method provided by react router
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  render() {
    const { post } = this.props;

    if (!post) {
      return <div>...Loading</div>
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// ownProps are all the props that are heading to ShowPosts component
// mapStateToProps is passed all of those props
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(ShowPosts);