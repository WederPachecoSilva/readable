import * as React from 'react';

import withErrorBoundary from '../errorHandling/withErrorBoundary';

const Root = () => <p>root</p>;

export default withErrorBoundary(Root);
