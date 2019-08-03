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
import { Edit } from "@material-ui/icons";

const styles = theme => ({
    editBio: {
      position: "fixed",
      top: 80,
      left: 290,
    },
});

class PostPost extends Component {
  state = {
    bio: '',
    website: '',
    location: '',
    open: false
  }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default PostPost
