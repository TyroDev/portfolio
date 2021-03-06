import React, { Component } from "react";
import PropTypes from "prop-types";

// Redux stuff:
import { connect } from "react-redux";
import { submitComment } from "../../redux/actions/dataActions";

// MUI stuff:
import {
  withStyles,
  Grid,
  Button,
  TextField
} from "@material-ui/core";

const styles = {
  textField: {},
  submitButton: {
    margin: "30px auto 10px auto",
    textAlign: "center",
    "& a": {
      margin: "20px 10px"
    }
  },
  visibleSeparator: {
    width: "100%",
    borderBottom: "1px solid rgba(0"
  },
  invisibleSeparator: {
    border: "none",
    margin: 4
  }
};

class CommentForm extends Component {
  state = {
    body: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
      if (nextProps.UI.errors) {
          this.setState({ errors: nextProps.UI.errors});
      }
      if (!nextProps.UI.errors && !nextProps.UI.loading) {
        this.setState({ body: ''});
      }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitComment(this.props.postId, { body: this.state.body });
  };

  render() {
    const { classes, authenticated } = this.props;
    const errors = this.state.errors;

    const commentFormMarkup = authenticated ? (
      <Grid item sm={12} style={{ textAlign: "center" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="body"
            type="text"
            label="Comment on post"
            error={errors.comment ? true : false}
            helperText={errors.comment}
            value={this.state.body}
            onChange={this.handleChange}
            fullWidth
            className={classes.textField}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </form>
        <hr className={classes.visibleSeparator} />
      </Grid>
    ) : null;
    return commentFormMarkup;
  }
}

CommentForm.propTypes = {
  submitComment: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  UI: state.UI,
  authenticated: state.user.authenticated
});

export default connect(
  mapStateToProps,
  { submitComment }
)(withStyles(styles)(CommentForm));
