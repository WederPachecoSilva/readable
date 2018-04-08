// @ts-check

import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Alert from '../primitives/Alert';
import Input from '../primitives/Input';
import TextArea from '../primitives/TextArea';
import withErrorBoundary from '../errorHandling/withErrorBoundary';
import { updateComment, fetchComment } from '../../actions/comments';

class EditPost extends React.Component {
  state = { author: '', body: '', error: false };

  async componentDidMount() {
    const { id } = this.props.match.params;
    await this.props.dispatch(fetchComment(id));
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, history, match } = this.props;
    const { author, body } = this.state;

    if (!author || !body) {
      this.setState({ error: true });
      return;
    }

    dispatch(updateComment(match.params.id, { author, body }));
    history.push('/');
    this.setState({ error: false });
  };

  render() {
    const { author, body, error } = this.state;
    return (
      <form style={styles.container} onSubmit={this.handleSubmit}>
        <Input
          style={styles.author}
          name="author"
          handleChange={this.handleChange}
          value={this.state.author}
          label="Author"
        />
        <hr />
        {error && !author && <Alert>Author must be filled up!</Alert>}

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

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    margin: 'auto',
    marginTop: '2em',
  },
  author: {
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

const mapState = ({ comments }) => ({
  comments,
});

EditPost.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  match: PropTypes.object,
  comments: PropTypes.object,
};

export default withErrorBoundary(connect(mapState)(EditPost));
