import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { editUserDetails } from "../redux/actions/userActions";

// Redux stuff:
import { connect } from "react-redux";

// MUI stuff:
import {
  withStyles,
  Button,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const styles = theme => ({
    editBio: {
      position: "fixed",
      top: 80,
      left: 290,
    },
});

class EditDetails extends Component {
  state = {
    bio: '',
    website: '',
    location: '',
    open: false
  }

  mapUserDetailsToState(credentials) {
    this.setState({
      bio: credentials.bio ? credentials.bio : '',
      website: credentials.website ? credentials.website : '',
      location: credentials.location ? credentials.location : ''
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
    this.mapUserDetailsToState(this.props.credentials);
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    const userDetails = {
      bio: this.state.bio,
      location: this.state.location,
      website: this.state.website
    };
    this.props.editUserDetails(userDetails);
    this.handleClose();
  };

  componentDidMount() {
    this.mapUserDetailsToState(this.props.credentials);
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Tooltip title="Edit details" placement="top">
          <IconButton onClick={this.handleOpen} className={classes.editBio}>
            <Edit color="primary" />
          </IconButton>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Edit your details</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                name="bio"
                type="text"
                label="Bio"
                multiline
                rows="2"
                maxLength={50}
                placeholder="About you"
                className={classes.textField}
                value={this.state.bio}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="website"
                type="text"
                label="Website"
                placeholder="Your personal/professional website"
                className={classes.textField}
                value={this.state.website}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                name="location"
                type="text"
                label="Location"
                placeholder="Where are you located?"
                className={classes.textField}
                value={this.state.location}
                onChange={this.handleChange}
                fullWidth
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="textSecondary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

EditDetails.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  credentials: state.user.credentials
});

export default connect(
  mapStateToProps,
  { editUserDetails }
)(withStyles(styles)(EditDetails));
