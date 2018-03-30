// @ts-check

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

import PostCardMenu from './Menu';
import { deletePost, votePost } from '../../actions/posts';
import CardHeaderAction from './HeaderAction';

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

  votePost = vote => {
    this.props.dispatch(votePost(this.props.post.id, vote));
  };

  render() {
    const { post, classes, location } = this.props;
    const postDetailLink = `/post/${post.id}`;
    const editPostLink = `/edit/${post.id}`;
    const time = moment(post.timestamp).format('DD/MM/YYYY, h:mm:ssa');

    return (
      <Grid key={post.id} item xs={12} sm={10} md={8}>
        <Card>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar} aria-label="Recipe">
                {post.author.charAt(0)}
              </Avatar>
            }
            title={post.title}
            subheader={time}
            // @ts-ignore
            action={
              <CardHeaderAction
                openMenu={this.openMenu}
                likeCount={post.likeCount}
                dislikeCount={post.dislikeCount}
                commentCount={post.commentCount}
                votePost={this.votePost}
              />
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
            {location.pathname !== postDetailLink && (
              <Link style={{ margin: 'auto' }} to={postDetailLink}>
                See more
              </Link>
            )}
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

const styles = {
  avatar: { marginRight: '1em', marginLeft: '1em' },
};

export default withRouter(withStyles(styles)(PostCard));
