import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router';

class PostsShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick = () => {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render () {
    const { post } = this.props;
    if(post) {
      return (
        <div>
          <Link to="/" className="btn btn-primary">Home Page</Link>
          <button
            onClick={this.onDeleteClick}
            className="btn btn-danger pull-xs-right">Delete</button>
          <h3>{post.title}</h3>
          <h6>{post.categories}</h6>
          <p>{post.content}</p>
        </div>
      )
    }
    return (<div>Loading...</div>);
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  }
}
export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);