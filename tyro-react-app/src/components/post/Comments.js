import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

// MUI stuff:
import { withStyles, Grid, Typography } from "@material-ui/core";

const styles = {
  commentImage: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    objectFit: 'cover',
    border: "6px solid #a6ce39",
    marginLeft: 44
  },
  commentData: {
    marginLeft: 20
  },
  invisibleSeparator: {
    border: "none",
    margin: 4
  },
  visibleSeparator: {
    width: "100%",
    borderBottom: "1px solid rgba(0"
  }
};

class Comments extends Component {
  render() {
    const { classes, comments } = this.props;
    console.log(comments);
    return (
      <Grid container>
        {comments.map((comment, index) => {
          const { body, userHandle, createdAt, userImage } = comment;
          return (
            <Fragment key={createdAt}>
              <Grid item sm={12}>
                <Grid container>
                  <Grid item sm={4}>
                    <img
                      src={userImage}
                      alt="comment"
                      className={classes.commentImage}
                    />
                  </Grid>
                  <Grid item sm={8}>
                    <div className={classes.commentData}>
                      <Typography
                        variant="h6"
                        component={Link}
                        to={`/users/${userHandle}`}
                        color="primary"
                      >
                        {userHandle}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {dayjs(createdAt).format("h:mm a, MMMM DD YYYY")}
                      </Typography>
                      <hr className={classes.invisibleSeparator} />
                      <Typography variant="body1">{body}</Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              { index !== comments.length -1 && <hr className={classes.visibleSeparator} />}
            </Fragment>
          );
        })}
      </Grid>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default withStyles(styles)(Comments);
