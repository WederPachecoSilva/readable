// @ts-check

import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { v4 } from 'uuid';

import { addPost } from '../../actions/posts';
import withErrorBoundary from '../errorHandling/withErrorBoundary';
import { fetchCategories } from '../../actions/categories';

class AddPost extends React.Component {
  state = { title: '', body: '', author: '', category: '', error: false };

  componentDidMount() {
    this.props.dispatch(fetchCategories());
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    const { title, body, author, category } = this.state;
    event.preventDefault();
    console.log(this.state);
    // All fields must be filled up
    if (!title || !body || !author || !category) {
      this.setState({ error: true });
      return;
    }

    const id = v4();
    const timestamp = new Date().toLocaleString();
    this.props.dispatch(addPost({ id, timestamp, ...this.state }));
  };

  render() {
    const { categories } = this.props;
    const { title, body, author, category, error } = this.state;

    return (
      <form onSubmit={this.handleSubmit} style={styles.container}>
        <div style={styles.authorContainer}>
          <label style={styles.authorLabel} htmlFor="author">
            Author
          </label>
          <input
            style={styles.authorInput}
            type="author"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
          />
          {!author &&
            error && (
              <Alert color="danger">Author field must be provided</Alert>
            )}
        </div>
        <div style={styles.titleContainer}>
          <label style={styles.titleLabel} htmlFor="title">
            Title
          </label>
          <input
            style={styles.titleInput}
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          {!title &&
            error && <Alert color="danger">Title field must be provided</Alert>}
        </div>
        <div style={styles.categoryContainer}>
          <label style={styles.categoryLabel} htmlFor="category">
            Select a category
          </label>
          <select
            style={styles.categoryInput}
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
          >
            {/* Defaults to empty option */}
            <option />
            {Object.keys(categories).map(id => (
              <option key={id}>{categories[id].name.toUpperCase()}</option>
            ))}
          </select>
          {!category &&
            error && (
              <Alert color="danger">Category field must be provided</Alert>
            )}
        </div>
        <div style={styles.bodyContainer}>
          <label style={styles.bodyLabel} htmlFor="body">
            Message
          </label>
          <textarea
            rows={5}
            style={styles.bodyInput}
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
        </div>
        {!body &&
          error && <Alert color="danger">Message field must be provided</Alert>}
        <input type="submit" value="Submit" style={styles.button} />
      </form>
    );
  }
}

const mapState = state => {
  return {
    categories: state.categories,
    state,
  };
};

export default withErrorBoundary(connect(mapState)(AddPost));

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    // margin: '1em',
    marginTop: '2em',
  },
  authorContainer: {
    display: 'flex',
    margin: '1em',
    flexDirection: 'column',
  },
  authorLabel: {},
  authorInput: {},
  titleContainer: {
    display: 'flex',
    margin: '1em',
    flexDirection: 'column',
  },
  titleLabel: {},
  titleInput: {},
  categoryContainer: {
    display: 'flex',
    margin: '0.5em',
    flexDirection: 'column',
  },
  categoryLabel: {},
  categoryInput: {},
  bodyContainer: {
    display: 'flex',
    margin: '0.5em',
    flexDirection: 'column',
  },
  bodyLabel: {},
  bodyInput: {},
  button: {
    margin: '0.5em',
  },
};
