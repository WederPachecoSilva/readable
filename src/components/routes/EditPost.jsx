import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Alert from '../primitives/Alert';
import Input from '../primitives/Input';
import TextArea from '../primitives/TextArea';
import withErrorBoundary from '../errorHandling/withErrorBoundary';
import { updatePost, fetchPost } from '../../actions/posts';

class EditPost extends React.Component {
  state = { title: '', body: '', error: false };

  async componentDidMount() {
    const { post_id } = this.props.match.params;
    await this.props.dispatch(fetchPost(post_id));
    const { title, body } = this.props.posts[post_id];
    this.setState({ title, body });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, history, match } = this.props;
    const { title, body } = this.state;

    if (!title || !body) {
      this.setState({ error: true });
      return;
    }
    dispatch(updatePost(match.params.post_id, { title, body }));
    history.goBack();
    this.setState({ error: false });
  };

  render() {
    const { title, body, error } = this.state;
    return (
      <form style={styles.container} onSubmit={this.handleSubmit}>
        <Input
          style={styles.title}
          name="title"
          handleChange={this.handleChange}
          value={this.state.title}
          label="Title"
        />
        <hr />
        {error && !title && <Alert>Title must be filled up!</Alert>}

        <TextArea
          style={styles.body}
          name="body"
          rows={6}
          value={this.state.body}
          handleChange={this.handleChange}
          label="Message"
        />
        {error && !body && <Alert>Message must be filled up!</Alert>}

        <button style={styles.button} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapState = ({ posts }) => {
  return { posts };
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    margin: 'auto',
    marginTop: '2em',
  },
  title: {
    marginTop: '0.5em',
    marginBottom: '0.5em',
  },
  body: {
    height: '10em',
    marginTop: '0.5em',
    marginBottom: '0.5em',
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

EditPost.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  match: PropTypes.object,
};

export default withErrorBoundary(connect(mapState)(EditPost));
