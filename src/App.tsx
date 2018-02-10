import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
                <Route component={NoMatch} />
            </Switch>
        </Router>
    </Provider>
);

export default App;
