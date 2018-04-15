import React from 'react';
import {
  withStyles,
  Card,
  CardHeader,
  CardActions,
  Avatar,
  CardContent,
  Typography,
  Grid,
} from 'material-ui';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';

import HeaderAction from './HeaderAction';

const PostCard = ({ post, classes, location, dispatch, match }) => {
  const postDetailLink = `/${post.category}/${post.id}`;
  const time = moment(post.timestamp).format('DD/MM/YYYY, h:mm:ssa');
  return (
    <Grid key={post.id} item md={8} sm={10} xs={12}>
      <Card>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} aria-label="Recipe">
              {post.author.charAt(0)}
            </Avatar>
          }
          title={`${post.title} - ${post.author.toUpperCase()}`}
          subheader={time}
          action={
            <HeaderAction match={match} dispatch={dispatch} post={post} />
          }
        />
        <CardContent>
          <Typography style={{ textAlign: 'center' }} component="p">
            {post.body}
          </Typography>
        </CardContent>
        <CardActions>
          {location.pathname !== postDetailLink && (
            <Link className={classes.seeMoreLink} to={postDetailLink}>
              More details
            </Link>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

const styles = {
  avatar: { marginRight: '1em', marginLeft: '1em' },
  seeMoreLink: { margin: 'auto' },
};

PostCard.propTypes = {
  dispatch: PropTypes.func,
  post: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(PostCard));
