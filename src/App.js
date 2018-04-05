import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';

const Root = Loadable({
  loader: () => import('./components/routes/Root'),
  loading: Loading,
});

const EditPost = Loadable({
  loader: () => import('./components/routes/EditPost'),
  loading: Loading,
});

const PostDetail = Loadable({
  loader: () => import('./components/routes/PostDetail'),
  loading: Loading,
});

const AddPost = Loadable({
  loader: () => import('./components/routes/AddPost'),
  loading: Loading,
});

const PostsByCategory = Loadable({
  loader: () => import('./components/routes/PostsByCategory'),
  loading: Loading,
});

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
