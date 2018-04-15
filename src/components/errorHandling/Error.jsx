import * as React from 'react';
import { Alert } from '../primitives/Alert';

/**
 * Simple error message in case something goes wrong while rendering.
 * In production it should have a better look
 */
const Error = () => (
  <Alert style={alert}>
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
