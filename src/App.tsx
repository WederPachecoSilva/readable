import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Root from './components/routes/Root';
import PostsByCategory from './components/routes/PostsByCategory';
import PostDetail from './components/routes/PostDetail';
import EditPost from './components/routes/EditPost';
import AddPost from './components/routes/AddPost';
import NotFound from './components/routes/NotFound';
import store from './store';

const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={Root} />
                <Route path="/:category" component={PostsByCategory} />
                <Route path="/post/:id" component={PostDetail} />
                <Route path="/edit/:id" component={EditPost} />
                <Route path="/add" component={AddPost} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>
);

export default App;
