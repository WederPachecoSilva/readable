import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import store from './store';
import Header from './components/header/Header';

const Loading = () => <p>Loading...</p>;

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
  <Provider store={store}>
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
  </Provider>
);

export default App;
