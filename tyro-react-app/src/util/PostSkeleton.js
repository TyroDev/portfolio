import React, { Fragment } from "react";
import NoImg from '../images/no-img.png';
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

// MUI stuff:
import { Card, CardContent, CardMedia } from "@material-ui/core";

const styles = theme => ({
    card: {
        display: 'flex',
        marginBottom: 20
    },
    cardContent: {
        width: '100%',
        flexDirection: 'column',
        padding: 25,
    },
    cover: {
        minWidth: 200,
        objectFit: 'cover'
    },
    handle: {
        width: 60,
        height: 20,
        backgroudColor: theme.palette.primary.main,
        marginBottom: 7
    }
});

const PostSkeleton = (props) => {
    const { classes } = props;

    const content = Array.from({ length: 5 }).map((item, index) => (
        <Card className={classes.card} key={index}>
            <CardMedia className={classes.cover} image={NoImg} />
            <CardContent className={classes.cardContent}>
                <div className={classes.handle}/>
                <div className={classes.date}/>
                <div className={classes.fullLine}/>
                <div className={classes.fullLine}/>
                <div className={classes.halfLine}/>
            </CardContent>
        </Card>
    ));

    return <Fragment>{content}</Fragment>;
}

PostSkeleton.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PostSkeleton);
