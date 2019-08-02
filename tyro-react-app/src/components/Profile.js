import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import EditDetails from './EditDetails';

// Redux stuff:
import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../redux/actions/userActions";

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

const styles = theme => ({
  login: {
    textAlign: "center"
  },
  paper: {
    padding: 20,
    position: "fixed",
    width: 280,
    minHeight: 340,
    left: 20,
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& .imageChange": {
        position: "absolute",
        top: "80%",
        left: "70%"
      },
      "& .logout": {
        position: "absolute",
        top: "80%",
        left: "12%"
      }
    },
    "& .profile-image": {
      width: 150,
      height: 150,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%",
      border: "10px solid",
      borderColor: theme.palette.primary.main
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle"
      },
      "& a": {
        color: theme.palette.primary.main
      }
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0"
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  buttons: {
    margin: "auto auto",
    textAlign: "center",
    "& a": {
      margin: "20px 10px"
    }
  }
});

class Profile extends Component {
  handleImageChange = event => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
  };

  handleEditPicture = () => {
    const fileInput = document.querySelector("#imageInput");
    fileInput.click();
  };

  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
        authenticated
      }
    } = this.props;

    let profileMarkup = !loading ? (
      authenticated ? (
        <Paper className={classes.paper}>
          <div className={classes.profile}>
            <div className="image-wrapper">
              <Tooltip title="logout" placement="top">
                <IconButton onClick={this.handleLogout} className="logout">
                  <KeyboardReturn color="primary" />
                </IconButton>
              </Tooltip>
              <img className="profile-image" src={imageUrl} alt="profile" />
              <input
                type="file"
                id="imageInput"
                hidden="hidden"
                onChange={this.handleImageChange}
              />
              <Tooltip title="Edit profile picture" placement="top">
                <IconButton onClick={this.handleEditPicture} className="imageChange">
                  <Edit color="primary" />
                </IconButton>
              </Tooltip>
            </div>
            <hr />
            <div className="profile-details">
              <MuiLink
                component={Link}
                to={`/users/${handle}`}
                color="primary"
                variant="h5"
              >
                @{handle}
              </MuiLink>
              <hr />
              {bio && <Typography variant="body2">{bio}</Typography>}
              <hr />
              {location && (
                <Fragment>
                  <LocationOn color="primary" />
                  <span>{location}</span>
                  <hr />
                </Fragment>
              )}
              {website && (
                <Fragment>
                  <LinkIcon color="primary" />
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {" "}
                    {website}
                  </a>
                  <hr />
                </Fragment>
              )}
              <CalendarToday color="primary" />{" "}
              <span>Joined {dayjs(createdAt).format("MMM YYYY")}</span>
            </div>
            <EditDetails />
          </div>
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <div className={classes.buttons}>
            <Typography className="login" variant="body2">
              No profile found,
              <br />
              please login or signup:
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <MuiLink component={Link} to={`/signup`} color="primary">
              Signup
            </MuiLink>
          </div>
        </Paper>
      )
    ) : (
      <p>Loading...</p>
    );

    return profileMarkup;
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = { logoutUser, uploadImage };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Profile));
