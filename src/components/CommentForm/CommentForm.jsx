// @ts-check

import React from 'react';
import v4 from 'uuid/v4';
import { connect } from 'react-redux';
import { Grid, withStyles } from 'material-ui';
import PropTypes from 'prop-types';

import Alert from '../primitives/Alert';
import Input from '../primitives/Input';
import TextArea from '../primitives/TextArea';
import { addComment } from '../../actions/comments';
import { fetchPost } from '../../actions/posts';

class CommentForm extends React.Component {
  state = { author: '', body: '', error: false };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { author, body } = this.state;
    if (!author || !body) {
      this.setState({ error: true });
      return;
    }
    const id = v4();
    const timestamp = new Date();
    const { post, dispatch } = this.props;
    dispatch(addComment({ id, author, body, timestamp, parentId: post.id }));
    this.setState({ author: '', body: '' });
  };

  render() {
    const { classes } = this.props;
    const { author, body, error } = this.state;
    return (
      <Grid className={classes.container} item md={8} sm={10} xs={12}>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="author"
            handleChange={this.handleChange}
            value={this.state.author}
            label="Author"
          />
          <br />
          {!error && !author && <Alert>Author field must be filled up!</Alert>}

          <TextArea
            name="body"
            rows={4}
            value={this.state.body}
            handleChange={this.handleChange}
            label="Comment"
          />
          {!error && !author && <Alert>Comment field must be filled up!</Alert>}

          <Grid container justify="center">
            <button className={classes.button} type="submit">
              Submit
            </button>
          </Grid>
        </form>
      </Grid>
    );
  }
}

const styles = {
  container: {
    borderRadius: '5px',
    backgroundColor: '#F7F7F7',
    padding: '5em',
    margin: '2em',
  },
  button: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1em',
    width: '10em',
    height: '2.3em',
    backgroundColor: '#28739E',
    color: 'black',
    border: '1px #28739E solid',
    borderRadius: '10px',
  },
};

CommentForm.propTypes = {
  classes: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default withStyles(styles)(connect()(CommentForm));
