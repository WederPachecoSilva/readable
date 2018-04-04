// @ts-check

import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import Alert from '../primitives/Alert';
import Input from '../primitives/Input';
import TextArea from '../primitives/TextArea';
import Select from '../primitives/Select';
import { addPost } from '../../actions/posts';
import { fetchCategories } from '../../actions/categories';
import withErrorBoundary from '../errorHandling/withErrorBoundary';

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
    if (!title || !body || !author || !category) {
      this.setState({ error: true });
      return;
    }
    const id = v4();
    const timestamp = new Date();
    this.props.dispatch(
      addPost({ id, timestamp, title, body, author, category })
    );
  };

  render() {
    const { categories } = this.props;
    const { title, body, author, category, error } = this.state;

    return (
      <form style={styles.form} onSubmit={this.handleSubmit}>
        <Input
          name="author"
          value={author}
          handleChange={this.handleChange}
          label="Author"
        />
        {!author && error && <Alert>Author field must be provided</Alert>}
        <hr />

        <Input
          name="title"
          value={title}
          handleChange={this.handleChange}
          label="Title"
        />
        {!title && error && <Alert>Title field must be provided</Alert>}
        <hr />

        <Select
          name="category"
          value={this.state.category}
          handleChange={this.handleChange}
          label="Select a category"
        >
          <option />
          {Object.keys(categories).map(id => (
            <option key={id}>{categories[id].name.toUpperCase()}</option>
          ))}
        </Select>
        {!category && error && <Alert>Category field must be provided</Alert>}
        <hr />

        <TextArea
          name="body"
          value={this.state.body}
          rows={5}
          label="Message"
          handleChange={this.handleChange}
        />
        {!body && error && <Alert>Message field must be provided</Alert>}

        <input type="submit" value="Submit" style={styles.button} />
      </form>
    );
  }
}

const mapState = state => {
  return {
    categories: state.categories,
  };
};

const styles = {
  button: {
    width: '10em',
    height: '2.3em',
    backgroundColor: '#28739E',
    color: 'black',
    border: '1px #28739E solid',
    borderRadius: '10px',
    margin: 'auto',
    marginTop: '1em',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    margin: 'auto',
    marginTop: '2em',
  },
};

export default withErrorBoundary(connect(mapState)(AddPost));
