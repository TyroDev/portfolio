import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../images/O.png";

// MUI stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { sizeWidth } from "@material-ui/system";

const styles = {
  form: {
    textAlign: "center"
  }
};

class login extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={`${classes.form} animated fadeIn`}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppIcon} width={80} alt="power button" />
          <Typography
            variant="h4"
            className={classes.pageTitle}
            color="textSecondary"
          >
            Login
          </Typography>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(login);
