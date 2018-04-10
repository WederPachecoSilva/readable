import * as React from 'react';
import { Alert } from 'reactstrap';

const Error = () => (
  <Alert style={alert} color="danger">
    <h4>An Error Ocurred!</h4>
    <hr />
    <p>Sorry, Something went wrong.</p>
    <p>Try it again later, please!</p>
  </Alert>
);

const alert = {
  textAlign: 'center',
};

export default Error;
