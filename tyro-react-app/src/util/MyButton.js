import React, { Component } from "react";

// MUI stuff:
import { IconButton, Tooltip } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

export class MyButton extends Component {
  render() {
    return (
      <Tooltip title="Edit profile picture" placement="top">
        <IconButton onClick={this.handleEditPicture} className="imageChange">
          <Edit color="primary" />
        </IconButton>
      </Tooltip>
    );
  }
}

export default MyButton;
