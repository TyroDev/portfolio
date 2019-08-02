import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

// MUI stuff:
import {
    withStyles,
    Paper,
    Typography,
    Button,
    IconButton,
    Tooltip
  } from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import {
    LocationOn,
    CalendarToday,
    Edit,
    KeyboardReturn
  } from "@material-ui/icons";
import LinkIcon from "@material-ui/icons/Link";

const styles = theme => ({...theme});

class EditDetails extends Component {
    render() {
        return (
            <div>
                {console.log(styles)}
            </div>
        )
    }
}

export default EditDetails
