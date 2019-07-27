import React, { Component } from "react";
import Logo from "../components/Logo";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Post from "../components/Post";

export class Home extends Component {
  state = {
    posts: null
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then(res => {
        this.setState({
          posts: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    let recentPostsMarkup = this.state.posts ? (
      this.state.posts.map(post => <Post key={post.postId} post={post} />)
    ) : (
      <p>Loading...</p>
    );
    return (
      <div>
        <Grid container spacing={10}>
          <Grid item sm={4} xs={12}>
            <div id="profile">
              <p>Profile...</p>
            </div>
          </Grid>
          <Grid item sm={8} xs={12} className="animated fadeIn">
            {recentPostsMarkup}
          </Grid>
        </Grid>
        <Logo />
      </div>
    );
  }
}

export default Home;
