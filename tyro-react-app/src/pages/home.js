import React, { Component } from "react";
import Logo from "../components/Logo";
import Grid from '@material-ui/core/Grid';

export class Home extends Component {
  render() {
    return (
      <div>
          <Grid container>
            <Grid item sm={8} xs={12}>
                <p>Content...</p>
            </Grid>
            <Grid item sm={4} xs={12}>
                <p>Profile...</p>
            </Grid>
          </Grid>
        <Logo />
      </div>
    );
  }
}

export default Home;
