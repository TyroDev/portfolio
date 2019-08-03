import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import MyButton from "../util/MyButton";

// Redux stuff:
import { connect } from "react-redux";
import { postPost } from "../redux/actions/dataActions";

// MUI stuff:
import {
  withStyles,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  CircularProgress
} from "@material-ui/core";
import { Close, Add } from "@material-ui/icons";

const styles = theme => ({
  closeButton: {
    position: "absolute",
    left: "90%",
    top: "10%"
  },
  submitButton: {
    position: "relative"
  },
  progressSpinner: {
    position: "absolute"
  }
});

class PostPost extends Component {
  state = {
    open: false,
    body: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors
      });
    };
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
        this.setState({ body: ''});
        this.handleClose();
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, errors: {} });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.postPost({ body: this.state.body });
  };

  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading }
    } = this.props;

    return (
      <Fragment>
        <MyButton onClick={this.handleOpen} tip="Post">
          <Add />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <MyButton
            tip="Close"
            onClick={this.handleClose}
            btnClassName={classes.closeButton}
          >
            <Close />
          </MyButton>
          <DialogTitle>Say it like you mean it!</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <TextField
                name="body"
                type="text"
                multiline
                rows="3"
                placeholder="New post"
                error={errors.body ? true : false}
                helperText={errors.body}
                onChange={this.handleChange}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitButton}
                disabled={loading}
              >
                Submit
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

PostPost.propTypes = {
  postPost: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  UI: state.UI
});

export default connect(
  mapStateToProps,
  { postPost }
)(withStyles(styles)(PostPost));
