import React, { Component } from "react";
import PropTypes from "prop-types";
import Post from "../components/post/Post";
import axios from "axios";
import StaticProfile from "../components/profile/StaticProfile";
import PostSkeleton from '../util/PostSkeleton';

import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { getUserDataAction } from "../redux/actions/dataActions";

import withStyles from "@material-ui/core/styles/withStyles";

const styles = {
  background: require("../images/Video-by-Oleg-Magni-from-Pexels.mp4")
};

class user extends Component {
  state = {
    profile: null,
    postIdParam: null,
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const postId = this.props.match.params.postId;

    if (postId) this.setState({ postIdParam: postId });

    this.props.getUserDataAction(handle);
    axios
      .get(`/user/${handle}`)
      .then(res => {
        this.setState({ profile: res.data.user });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { posts, loading } = this.props.data;
    const { postIdParam } = this.state;

    const postsMarkup = loading ? (
      <PostSkeleton />
    ) : posts === null ? (
      <p>No posts from this user</p>
    ) : !postIdParam ? (
      posts.map(post => <Post key={post.postId} post={post} />)
    ) : (
      posts.map(post => {
        if (post.postId !== postIdParam)
          return <Post key={post.postId} post={post} />
        else return <Post key={post.postId} post={post} openDialog />
      })
    )

    return (
      <div>
        <Grid container spacing={10}>
          <Grid item sm={4} xs={12}>
            {this.state.profile === null ? (
              <p>Loading...</p>
            ) : (
              <StaticProfile profile={this.state.profile} />
            )}
          </Grid>
          <Grid item sm={8} xs={12} className="animated fadeIn">
            {postsMarkup}
          </Grid>
        </Grid>
      </div>
    );
  }
}

user.propTypes = {
  getUserDataAction: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getUserDataAction }
)(withStyles(styles)(user));
