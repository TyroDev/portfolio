import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import MyButton from "../../util/MyButton";
import PostPost from '../post/PostPost';

// Redux stuff:
import { connect } from "react-redux";

// Material UI stuff:
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

// Icons:
import { Home, Notifications } from "@material-ui/icons";

const styles = {
  nav: {
    minHeight: 55
  }
};

export class Navbar extends Component {
  render() {
    const { classes, authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar className={`${classes.nav} nav-container`}>
          {authenticated ? (
            <Fragment>
              <PostPost />  
              <Link to="/">
                <MyButton tip="Home">
                  <Home />
                </MyButton>
              </Link>
              <MyButton tip="Notifications">
                <Notifications />
              </MyButton>
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
});

export default connect(mapStateToProps)(withStyles(styles)(Navbar));