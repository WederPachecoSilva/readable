// @ts-check

import React from 'react';
import {
  withStyles,
  Card,
  CardHeader,
  CardActions,
  IconButton,
  Avatar,
  CardContent,
  Typography,
  Grid,
} from 'material-ui';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { Link } from 'react-router-dom';

import PostCardMenu from './PostCardMenu';
import { deletePost } from '../../actions/posts';

class PostCard extends React.Component {
  state = {
    anchorEl: null,
  };

  openMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };

  handleDeleteMenu = () => {
    this.props.dispatch(deletePost(this.props.post.id));
  };

  render() {
    const { post, classes } = this.props;
    const postDetailLink = `/post/${post.id}`;
    const editPostLink = `/edit/${post.id}`;
    return (
      <Grid key={post.id} item xs={12} sm={6} md={4}>
        <Card>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar} aria-label="Recipe">
                {post.author.charAt(0)}
              </Avatar>
            }
            title={post.title}
            subheader={post.timestamp}
            action={
              <IconButton onClick={this.openMenu}>
                <MoreVertIcon />
              </IconButton>
            }
          />
          <PostCardMenu
            anchorEl={this.state.anchorEl}
            editPostLink={editPostLink}
            handleDeleteMenu={this.handleDeleteMenu}
            handleCloseMenu={this.handleCloseMenu}
          />
          <CardContent>
            <Typography style={{ textAlign: 'center' }} component="p">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Link style={{ margin: 'auto' }} to={postDetailLink}>
              See more
            </Link>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

const styles = {
  avatar: { marginRight: '1em', marginLeft: '1em' },
};

export default withStyles(styles)(PostCard);
