// @ts-check

import * as React from 'react';
// import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';

import Alert from '../primitives/Alert';
import Input from '../primitives/Input';
import TextArea from '../primitives/TextArea';
import withErrorBoundary from '../errorHandling/withErrorBoundary';
import { updatePost, fetchPost } from '../../actions/posts';

class EditPost extends React.Component {
  state = { title: '', body: '', error: false };

  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.dispatch(fetchPost(id));
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

    dispatch(updatePost(match.params.id, { title, body }));
    history.push('/');
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

const mapState = state => ({
  posts: state.posts,
});

export default withErrorBoundary(connect(mapState)(EditPost));

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
