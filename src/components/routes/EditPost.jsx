// @ts-check

import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { Alert, Container } from 'reactstrap';
import { connect } from 'react-redux';

import withErrorBoundary from '../errorHandling/withErrorBoundary';
import { updatePost, fetchPost } from '../../actions/posts';

const EditForm = ({ errors, touched, isSubmitting }) => (
  <Container>
    <Form style={styles.container}>
      <span>Title</span>
      <Field style={styles.title} type="title" name="title" />
      {errors.title &&
        touched.title && (
          <Alert color="Danger">Title field must be filled up</Alert>
        )}
      <span>Body</span>

      <Field style={styles.body} component="textarea" name="body" />
      {errors.body &&
        touched.body && (
          <Alert color="danger">Post body field must be filled up</Alert>
        )}
      <button style={styles.button} type="submit" disabled={isSubmitting}>
        submit
      </button>
    </Form>
  </Container>
);

class EditPost extends React.Component {
  componentWillMount() {
    const { id } = this.props.match.params;
    this.props.dispatch(fetchPost(id));
  }

  render() {
    const { dispatch, match, history, posts } = this.props;
    const { id } = match.params;

    return (
      <Formik
        initialValues={posts[id]}
        onSubmit={(values, actions) => {
          dispatch(updatePost(id, values));
          actions.setSubmitting(false);
          history.push('/');
        }}
        component={EditForm}
      />
    );
  }
}

const mapState = state => ({
  posts: state.posts,
});

export default withErrorBoundary(connect(mapState)(EditPost));

const styles = {
  container: {
    marginTop: '1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
    marginTop: '0.8em',
    borderRadius: 5,
  },
};
