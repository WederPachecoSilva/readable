import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { CircularProgress } from 'material-ui';

import Header from './components/Header/Header';

const Loading = () => <CircularProgress size={50} />;

// @ts-ignore
const Root = Loadable({
  loader: () => import('./components/routes/Root'),
  loading: Loading,
});

// @ts-ignore
const EditPost = Loadable({
  loader: () => import('./components/routes/EditPost'),
  loading: Loading,
});

// @ts-ignore
const PostDetail = Loadable({
  loader: () => import('./components/routes/PostDetail'),
  loading: Loading,
});

// @ts-ignore
const AddPost = Loadable({
  loader: () => import('./components/routes/AddPost'),
  loading: Loading,
});

// @ts-ignore
const PostsByCategory = Loadable({
  loader: () => import('./components/routes/PostsByCategory'),
  loading: Loading,
});

// @ts-ignore
const NotFound = Loadable({
  loader: () => import('./components/routes/NotFound'),
  loading: Loading,
});

const App = () => (
  <Router>
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Root} />
        <Route path="/posts/:category" component={PostsByCategory} />
        <Route path="/post/:id" component={PostDetail} />
        <Route path="/edit/:id" component={EditPost} />
        <Route path="/add" component={AddPost} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
