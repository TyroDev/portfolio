import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Redux stuff
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

// MUI stuff
import {
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  withStyles
} from "@material-ui/core";

const styles = {
  form: {
    textAlign: "center"
  },
  pageTitle: {
    fontFamily: "Quicksand",
    margin: "40px auto 20px auto"
  },
  button: {
    margin: "40px auto auto auto",
    position: "relative"
  },
  customError: {
    color: "tomato",
    fontSize: "0.8rem",
    marginTop: 20
  },
  progress: {
    position: "absolute"
  }
};

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

componentWillReceiveProps(nextProps) {
  if (nextProps.UI.errors){
    this.setState({ errors: nextProps.UI.errors });
  }
};

  handleSubmit = event => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { classes, UI: { loading } } = this.props;
    const { errors } = this.state;
    return (
      <Grid container className={`${classes.form} animated fadeIn`}>
        <Grid item sm />
        <Grid item sm>
          <Typography
            variant="h4"
            className={classes.pageTitle}
            color="textSecondary"
          >
            Login
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Submit
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <p>
              <small>
                Don't have an account? Sign-up <Link to="/signup">here</Link>
              </small>
            </p>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(login));
