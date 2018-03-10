// @ts-check

import React from 'react';
import { connect } from 'redux';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from 'reactstrap';
import { v4 } from 'uuid';

import { addPost } from '../../actions/posts';
import withErrorBoundary from '../errorHandling/withErrorBoundary';

class AddPost extends React.Component {
  state = { title: '', body: '', author: '', category: '' };

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="author">Author</Label>
          <Input type="author" name="email" />
        </FormGroup>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input type="password" name="title" />
        </FormGroup>
        <FormGroup>
          <Label for="category">Select a category</Label>
          <Input type="select" name="category">
            {categories.map(category => <option>{category.name}</option>)}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="body">Message</Label>
          <Input type="textarea" name="body" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default withErrorBoundary(connect()(AddPost));
