import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
// MUI stuff:
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    display: "flex"
  }
};

class Post extends Component {
  render() {
    const { classes, post : { body, createdAt, userImage, userHandle, postId, likeCount, commentCount } } = this.props;
    // same as saying:
    // const classes = this.props.classes;
    return (
      <Card>
          <CardMedia
          image={userImage}
          title="Profile image" />
          <CardContent>
              <Typography>

              </Typography>
          </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Post);
