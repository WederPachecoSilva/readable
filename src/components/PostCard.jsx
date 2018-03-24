// @ts-check

import React from 'react';
import {
  withStyles,
  Card,
  CardHeader,
  CardActions,
  IconButton,
  Avatar,
  Grid,
  Menu,
  CardContent,
  Typography,
  MenuItem,
} from 'material-ui';
import { deletePost } from '../actions/posts';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import { Link } from 'react-router-dom';

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

  render() {
    const anchorEl = this.state;
    const { post, classes, dispatch } = this.props;
    const link = `/post/${post.id}`;
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
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleCloseMenu}
          >
            <MenuItem>
              <Link to={editPostLink}>Edit Post</Link>
            </MenuItem>
            <MenuItem onClick={() => dispatch(deletePost(post.id))}>
              Delete Post
            </MenuItem>
          </Menu>
          <CardContent>
            <Typography style={{ textAlign: 'center' }} component="p">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Link style={{ margin: 'auto' }} to={link}>
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
